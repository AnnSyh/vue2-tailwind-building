<template>
	<div class="container m-auto dark:bg-gray-500 dark:text-white">
		<div class="flex gap-4 bg-gray-100 p-4 items-center justify-end dark:bg-gray-500 dark:text-white">
			<LocaleSwitcher />
			<router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">{{$t('main')}}</router-link>
			<router-link to="/photo"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">{{$t('photos')}}</router-link>
			<ThemsSwitcher/>
		</div>

	</div>
	
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue"
import ThemsSwitcher from "@/components/ThemsSwitcher.vue"

export default {
	name: 'NavBar',
	components: {
    LocaleSwitcher,
    ThemsSwitcher
},
    data() {
      return {
        model: false,
      }
    },
  }
	
</script>

<style scoped>

</style>
