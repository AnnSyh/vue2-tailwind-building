<template> 
	<div class="container mx-auto">

		<div class="my-12 px-4 ">
			<h1 class="text-2xl md:text-3xl mb-8 mt-16 font-serif max-w-3xl mx-auto dark:text-white">
				<!-- Статья {{id}}:<br> -->
				{{article.title}}
			</h1>
			<div class="mb-8 px-2 w-full flex justify-between">
				<a href="/articles" class="text-indigo-600 text-sm hover:underline">
					<span class="inline-block transform rotate-180">→</span> Все статьи 
				</a>
				<div class="flex gap-2">
					<div class="text-center">
						<span class="text-gray-500 bg-gray-200 h-10 rounded px-2 py-1 text-xs select-none">
						Info
						</span>
					</div>
	
					<div class="text-center">
						<span class="text-green-500 bg-green-200 h-10 rounded px-2 py-1 text-xs select-none">
						Success
						</span>
					</div>
	
					<div class="text-center">
						<span class="text-red-500 bg-red-200 h-10 rounded px-2 py-1 text-xs select-none">
						Danger
						</span>
					</div>
	
					<div class="text-center">
						<span class="text-yellow-500 bg-yellow-200 h-10 rounded px-2 py-1 text-xs select-none">
						Warning
						</span>
					</div>
				</div>
			</div>
			<div v-if="article.url">
				<img  :src="article.url" :alt=article.title class="w-80 h-80 float-left mr-4 mb-4">
			</div>
			<!-- <div class="">{{article.text}}</div> -->
			<span v-html='article.text'></span>
		</div>

	</div>
</template>

<script>
import articles from '../../mocks/articles'

export default {

	data() {
			return {
				id: this.$router.currentRoute.params['id'],
				// id: this.$route.params['id']
			};
		},
		watch: {
			$route(toR){
				this.id = toR.params['id']
			}
		},
		created() {
			const article = articles.find(article => article.id == this.$route.params.id)
			if (article) {
			this.article = article
			}
		}

}
	
</script>

<style scoped>

</style>
