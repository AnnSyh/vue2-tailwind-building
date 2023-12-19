<template>
	<div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<div v-for="(image, index) in photos" :key="index" class="flex flex-col items-center p-6">
				<img width="200" height="200" :src="image.url" @click="showModalWindow(index)" class="cursor-pointer">
			</div>
		</div>

		<Modal :image="selectedImage" :show="showModal" @close="closeModal" />
	</div>
	</template>
	
	<script>
	import Modal from '@/components/photo/ModalWindow.vue';
	
	export default {
		components: {
			Modal
		},
		data() {
			return {
				photos:[],
				selectedImage: {},
				showModal: false
			};
		},
		mounted(){
			this.fetchTodo()
		},
		methods: {
			fetchTodo(){
				this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
					.then(response => this.photos = response.data)
			},
			showModalWindow(index) {
				this.selectedImage = this.photos[index];
				this.showModal = true;
			},
			closeModal() {
				this.showModal = false;
			}
		}
	};
	</script>