<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white" >
		<!-- <p>{{$t('main-page') | to-uppercase}}</p>
		<p>{{$t('hello')}}</p> -->
		<div class="grid-wrapper">
			<tilt 
				data-tilt data-tilt-reverse="true" 
				data-tilt-perspective="500"  
				data-tilt-max="10" 
				class="tilt-card"
			>
				<div class="grid grid-cols-12 gap-3 w-full h-full px-5 py-6">
					<div class="col-span-12 sm:col-span-7 flex justify-center">
						<div class="person-info  h-full">
							<div class="person-info-col">
								<img class="h-40 rounded-full" src="@/assets/images/IvanSukharevskiy.jpg" alt="person" >
							</div>
							<div class="person-info-col">
								<p class="text-light-gray lg:text-lg">{{$t('SuharevskiyIvan')}}</p>
								<p class="text-light-gray lg:text-lg"><a class="text-indigo-600 text-xs uppercase hover:underline" href="tel:79889502395"> +7 (988) 950 23 95</a></p>
								<p class="text-light-gray lg:text-lg"><a class="text-indigo-600 text-xs uppercase hover:underline" href="mailto:ivan.suharevskiy@gmail.com">ivan.suharevskiy@gmail.com</a></p>
							</div>
							<div class="col-span-2 text-center">
								<p class="text-light-gray lg:text-lg">{{$t('Assistantlawyer')}}</p>
								<p class="text-light-gray lg:text-lg">
									<a href="https://asnis.ru/" target="_blank">
										<img 
											class="h-40 rounded-full" 
											src="@/assets/images/logo_asnis.svg" 
											alt="person" 
											style="width: 345px; height: 40px;">
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="col-span-12 sm:col-span-5 m-auto">
						<!-- <img class="max-h-56 m-auto" src="@/assets/images/legalScales1.png" alt="person" fill="#e5e7eb"  > -->
						<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
							<image 
								x="0" y="0" width="300" height="300" alt=""
								:href="this.$i18n.locale === 'en' ? require('@/assets/images/stamp-txt-en.svg') : require('@/assets/images/stamp-txt.svg')"
							/>
							<image href="@/assets/images/stamp-img.svg" x="85" y="85" width="130" height="130" alt="" /> 
						</svg>

					</div>
				</div>
			</tilt>
		</div>
	</div>
</template>

<script>
import tilt from 'vanilla-tilt-vue'

export default {
	components: {
		tilt
	},
}
</script>

<style scoped>

.person-info  {
	@apply  grid gap-4;
	grid-template-columns: repeat(2, minmax(0, auto));
}
.person-info-col {
	@apply flex flex-col h-full justify-center;
}
.tilt-card {
	@apply rounded-3xl overflow-hidden border-8 border-green-400  dark:border-yellow-400;
	@apply bg-no-repeat bg-contain bg-gray-200 text-black relative h-auto;
	width: 800px;
	min-height: 373px;
    background-position: 0px bottom;

	@screen md {
		height: 373px;
		background-position: 182% 0px;
	}
}

.ticket-person {
	@apply h-9 md:h-16 lg:h-24;
}

.container {
	height: calc(100% - 130px);
}

.grid-wrapper {
	@apply flex m-auto justify-center items-center;
	max-width: 800px;
	height: calc(100% - 64px);
}


.svg-img {
	position: absolute;
	z-index: 10;
	top: 89px;
	left: 87px;
}
.svg-txt {
	position: absolute;
	top: 0px;
	left: 0px;
}	

</style>
