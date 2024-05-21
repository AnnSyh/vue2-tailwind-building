<template>
	<div id="app" :class="{'dark': isDarkMode}" class="h-screen dark:bg-gray-700 dark:text-white  flex flex-col">
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
		}
	},
	components: {
		Navbar,
		Footer,
	}
}
</script>

<style>

</style>
