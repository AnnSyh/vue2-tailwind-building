<template> 
	<div class="container mx-auto">

		<div class="my-12 px-4 ">
			<!-- <p>allArticles = {{allArticles}}</p> -->
			<h1 class="text-2xl md:text-3xl mb-8 mt-16 font-serif max-w-3xl mx-auto dark:text-white">
				<!-- Статья {{id}}:<br> -->
				{{article.title}}
			</h1>
			<div class="mb-8 px-2 w-full flex justify-between">
				<a href="/articles" class="text-indigo-600 text-sm hover:underline">
					<span class="inline-block transform rotate-180">→</span> Все статьи 
				</a>
				<TagsBlock/>
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
// import articles from '../../mocks/articles'
import TagsBlock from '@/components/TagsBlock.vue'
import  {mapGetters, mapActions} from 'vuex'

export default {
	components: {
		TagsBlock
	},
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
	computed: {
		...mapGetters(['allArticles'])
	},
	methods: mapActions(['fetchArticles']),
	created() {
		// console.log('allArticles = ', this.allArticles)
		// console.log('articles = ', articles)
		// console.log('this.$route.params.id = ', this.$route.params.id)

		const article = this.allArticles.find(article => article.id == this.$route.params.id)
		if (article) {
		this.article = article
		}
	},

}
	
</script>

<style scoped>

</style>
