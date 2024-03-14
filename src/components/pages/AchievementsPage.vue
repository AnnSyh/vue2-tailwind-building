<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white">
		<div class="mx-auto my-12 px-4">
			<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2 dark:text-white">{{$t('achievements')}}</h2>
			<!-- Slider main container -->
			<div ref="swiper" class="swiper">
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div v-for="(image, index) in images" :key="index" class="swiper-slide">
						<img 
							class="swiper-slide-img" 
							:src="image.src" alt="Slide"
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
			images:  [
				{
					src: 'https://mylaw.fun/wp-content/uploads/2022/03/aktion-1.jpeg',
					title: "accusamus beatae ad facilis cum similique qui sunt"
				},
				{src: 'https://mylaw.fun/wp-content/uploads/2022/03/aktion.jpeg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2022/03/0001-1-scaled.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2022/03/%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%D0%B2%D0%BE%D0%B9%D0%94%D0%B8%D0%BA%D1%82%D0%B0%D0%BD%D1%82-1-scaled.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2022/03/0001-scaled.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2022/05/TIN.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2022/05/SertifikatK.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/11/PenPaper-scaled.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/10/0001-scaled.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/08/%D0%B3%D0%B0%D1%80%D0%B0%D0%BD%D1%82.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/08/%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D0%BD%D1%82.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/08/Sukharevskiy1024_1.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/08/Sukharevskomu_Ivanu_Ivanovichu_page-0001.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/08/certificate-1.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/08/Geneve-scaled.jpg'},
				{src: 'https://mylaw.fun/wp-content/uploads/2021/12/syharevskiy-scaled.jpg'},
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
  height: calc(100vh - 81px);
  z-index: 0;
}
.swiper-slide {
	@apply flex;
}

</style>
