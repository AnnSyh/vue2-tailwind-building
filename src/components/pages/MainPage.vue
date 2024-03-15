<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white">
		<p>{{$t('main-page') | to-uppercase}}</p>
		<p>{{$t('hello')}}</p>
		<!-- <ThreeFour/> -->
		<!-- <ThreeFirst/> -->

		<ThreeSix/>
	</div>
</template>

<script>
// import ThreeFour from '@/components/three/four-three.vue';
// import ThreeFirst from '@/components/three/first-three.vue';
// import ThreeSix from '@/components/three/six-three_old.vue';

import ThreeSix from '@/components/three/newFile.vue';

export default {
	components: {
		// ThreeFirst, 
		// ThreeFour,
		ThreeSix
	},
}	
</script>

<style scoped>

</style>
