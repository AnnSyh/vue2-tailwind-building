<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white">
		<p>{{$t('main-page') | to-uppercase}}</p>
		<p>{{$t('hello')}}</p>
		<ThreeFour/>
	</div>
</template>

<script>
import ThreeFour from '@/components/three/four-three.vue';
export default {
	components: {
		ThreeFour, 

		// ThreeFirst, 
		// ThreeFour,
	},
}	
</script>

<style scoped>

</style>
