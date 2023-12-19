<template>
	<div id="app" :class="{'dark': isDarkMode}" class="dark:bg-gray-700 dark:text-white">
		<Navbar />
		<router-view/>
	</div>
</template>

<script>
import Navbar from  "@/components/NavBar.vue"

export default {
	name: 'App',
	data() {
		return {
		isDarkMode: false, // Используйте переменную для определения активной темы
		}
	},
	components: {
		Navbar,
	}
}
</script>

<style>

</style>
