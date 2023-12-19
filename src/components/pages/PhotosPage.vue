<template>
	<div class="container m-auto">
		<Gallery />
	</div>
</template>

<script>
// import Gallery from '@/components/PhotoGallery.vue';
import Gallery from '@/components/photo/PhotoGallery.vue';

export default {
	components: {
		Gallery,
		// photoForm,
	},
	data:()=>({
		photos:[],
		currentPhoto: {},
		dialogVisible: false,
	}),
	mounted(){
		this.fetchTodo()
	},
	methods: {
		
		fetchTodo(){
			this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
				.then(response => this.photos = response.data)
		},
		addPhoto(photo){
			this.photos.push(photo)
			console.log('addPhoto = ',photo)
		},
		openPhoto(photo){
			this.currentPhoto = photo
			this.dialogVisible = true
			console.log('openPhoto: photo = ',photo)
		},
	
	}
}
</script>

<style scoped>

</style>
