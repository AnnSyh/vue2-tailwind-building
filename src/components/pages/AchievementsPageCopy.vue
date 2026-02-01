<template>
	<div class="container m-auto dark:bg-gray-700 dark:text-white">
		<AchievementsCarousel />
	</div>
</template>

<script>
import AchievementsCarousel from "../AchievementsCarousel.vue";

export default {
	components: {
		AchievementsCarousel
	}
}


</script>

<style scoped>
.swiper-slide-img
{
	@apply ml-auto mr-auto;
	height: fit-content;
	max-height: 80vh;
}

.swiper
{
	width: 100%;
	height: calc(100vh - 205px);
	z-index: 0;
}

.swiper-slide
{
	@apply flex;
}
</style>
