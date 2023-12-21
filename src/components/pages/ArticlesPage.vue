<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white">

		<div class="mx-auto my-12 px-4">
			<div class="md:flex justify-between items-center mb-8">
				<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
					{{$t('RecentArticles')}}:
				</h2>
				<!-- <div>{{postsCount}}</div> -->				
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<ArticleCard v-for="(article, index) in allArticles" 
					:key="index" 
					:article="article"
				/>
			</div>
		</div>

	</div>
</template>

<script>
import ArticleCard from '@/components/article/ArticleCard.vue'
import  {mapGetters, mapActions} from 'vuex'

export default {
	components: {
		ArticleCard,
	},
	computed: mapGetters(['allArticles','postsCount']),
	methods: mapActions(['fetchArticles']),
	async mounted(){
		// this.$store.dispatch('fetchArticles')
		this.fetchArticles(4)
	}
}
	
</script>

<style scoped>

</style>
