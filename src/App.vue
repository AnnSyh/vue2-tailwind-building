<template>
	<div id="app" :class="{'dark': isDarkMode}" class="dark:bg-gray-700 dark:text-white  flex flex-col h-full">
		<Navbar />
		<router-view/>
		<Footer />

	</div>
</template>

<script>
import Navbar from  "@/components/NavBar.vue"
import Footer from  "@/components/footer-one"

export default {
	name: 'App',
	data() {
		return {
			isDarkMode: false, // Используйте переменную для определения активной темы
			pageTitle: 'sukharevskiy.ru' // Задаем начальное значение заголовка
		}
	},
	components: {
		Navbar,
		Footer,
	},
	created() {
		this.updateDocumentTitle();
	},
	watch: {
		'$route'() {
		this.updateDocumentTitle();
		}
	},
	methods: {
		updateDocumentTitle() {
		document.title = 'sukharevskiy.ru' + this.$route.path

		}
	}
}
</script>

<style>

</style>
