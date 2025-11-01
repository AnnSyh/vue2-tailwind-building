<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white">
		<div class="mx-auto my-12 px-4">
			<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2 dark:text-white">{{$t('achievements')}}</h2>
			<!-- Slider main container -->
			<div ref="swiper" class="swiper">
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div v-for="(item, index) in images" :key="index" class="swiper-slide">
						<img 
							class="swiper-slide-img" 
							:src="item.src" 
							alt="Slide"
							@click="showModalWindow(index)" 
						>
					</div>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-scrollbar"></div>
			</div>
		</div>

		<Modal :image="selectedImage" :show="showModal" @close="closeModal" />

	</div>
</template>

<script>
import Modal from '@/components/ModalWindowAchievements.vue';
import Swiper, {Pagination, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import config from '@/config'

export default {
	components: {
		Modal
	},
	data() {
		return {
			photos:[],
			selectedImage: {},
			showModal: false,
			currentImageIndex: 0,
            config: config,
			images:  [
				{src: config.getUploadUrl('/2025/10/photo_2025-10-31_09-48-45-1.jpg')},
				{src: config.getUploadUrl('/2022/03/aktion-1.jpeg')},
				{src: config.getUploadUrl('/2022/03/aktion.jpeg')},
				{src: config.getUploadUrl('/2022/03/0001-1-scaled.jpg')},
				{src: config.getUploadUrl('/2022/03/ПравовойДиктант-1-scaled.jpg')},
				{src: config.getUploadUrl('/2022/03/0001-scaled.jpg')},
				{src: config.getUploadUrl('/2022/05/TIN.jpg')},
				{src: config.getUploadUrl('/2022/05/SertifikatK.jpg')},
				{src: config.getUploadUrl('/2021/11/PenPaper-scaled.jpg')},
				{src: config.getUploadUrl('/2021/10/0001-scaled.jpg')},
				{src: config.getUploadUrl('/2021/08/гарант.jpg')},
				{src: config.getUploadUrl('/2021/08/Консультант.jpg')},
				{src: config.getUploadUrl('/2021/08/Sukharevskiy1024_1.jpg')},
				{src: config.getUploadUrl('/2021/08/Sukharevskomu_Ivanu_Ivanovichu_page-0001.jpg')},
				{src: config.getUploadUrl('/2021/08/certificate-1.jpg')},
				{src: config.getUploadUrl('/2021/08/Geneve-scaled.jpg')},
			]
		}
	},
	mounted() {
		new Swiper(this.$refs.swiper, {
			// configure Swiper to use modules
			modules: [Pagination, Mousewheel],
			// Optional parameters
			direction: 'vertical',
			loop: true,
			mousewheel: true,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
			},

			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		}),
		this.fetchTodo()
	},
	methods: {
		fetchTodo(){
			this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
				.then(response => this.photos = response.data)
		},
		showModalWindow(index) {
			this.selectedImage = this.images[index];
			console.log('this.selectedImage = ',this.selectedImage);
			// this.selectedImage = this.photos[index];
			this.showModal = true;
		},
		closeModal() {
			this.showModal = false;
		}
	}
}

	
</script>

<style scoped>
.swiper-slide-img {
	@apply ml-auto mr-auto;
	height: fit-content;
	max-height: 80vh;
}
.swiper {
  width: 100%;
  height: calc(100vh - 205px);
  z-index: 0;
}
.swiper-slide {
	@apply flex;
}

</style>
