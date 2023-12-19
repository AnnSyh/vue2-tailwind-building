<template>
	<div class="container m-auto">
		<div class="flex gap-4 bg-gray-100 p-4 items-center justify-end">
			<LocaleSwitcher />
			<router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">{{$t('main')}}</router-link>
			<router-link to="/photo"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">{{$t('photos')}}</router-link>
		</div>

	</div>
	
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

export default {
	name: 'NavBar',
	components: {
		LocaleSwitcher
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
