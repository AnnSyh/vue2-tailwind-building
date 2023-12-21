<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white">

		<div class="mx-auto my-12 px-4">
			<div class="md:flex justify-between items-center mb-8">
				<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
					{{$t('RecentArticles')}}:
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<ArticleCard v-for="(article, index) in articles" 
					:key="index" 
					:article="article"
				/>
			</div>
		</div>

	</div>
</template>

<script>
import ArticleCard from '@/components/article/ArticleCard.vue'
import articles from '../../mocks/articles'

export default {
	components: {
		ArticleCard
	},
	data() {
		return {
			articles
		}
	}
}
	
</script>

<style scoped>

</style>
