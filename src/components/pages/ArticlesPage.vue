<template>
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white">

		<div class="mx-auto my-12 px-4">
			<div class="md:flex justify-between items-center mb-8">
				<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
					{{ $t('RecentArticles') }}:
				</h2>
			</div>
			<!-- <p>this.$store.state.allArticles.allArticles = {{ this.$store.state.allArticles.allArticles }}</p><hr> -->
			<!-- <TagsBlock/> -->

			<div class="flex flex-wrap gap-2">
				<div 	v-for="(tag, index) in this.$store.state.allTags.tags"
						:key="index"
						class="text-center cursor-pointer"
				>
					<button
						@click="filteredTag(tag.name)" 
						:class="'text-' + tag.color + '-500 bg-' + tag.color + '-200 h-10 rounded px-2 py-1 text-xs select-none'"
					>
						{{tag.name}} 
					</button>
				</div>
					<button
						@click="filteredSbros()" 
						:class="'text--500 bg--200 h-10 rounded px-2 py-1 text-xs select-none'"
					>
						X
					</button>
			</div>

			<input type="text" v-model="searchInput" class="border border-gray-300 w-full my-4 px-4 py-4 rounded"
				placeholder="Поиск по названиям статей">

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

				<ArticleCard v-for="(article, index) in filteredArticles" :key="index" :article="article" />
				<!-- <ArticleCard v-for="(article, index) in filteredArticlesTag" :key="index" :article="article" /> -->

			</div>
		</div>

	</div>
</template>

<script>
import ArticleCard from '@/components/article/ArticleCard.vue'
// import TagsBlock from '@/components/TagsBlock.vue'
// import  {mapGetters, mapActions} from 'vuex'

export default {
	components: {
		ArticleCard,
		// TagsBlock,
	},

	data() {
		return {
			searchInput: '',
			tagFilter: null
		}
	},
	computed: {
		filteredArticles() {
			// console.log('filteredArticles = ', this.$store.state.allArticles.allArticles);
			return this.$store.state.allArticles.allArticles.filter(article => article.title.toLowerCase().includes(this.searchInput.toLowerCase()));
		},
		// filteredArticlesTag() {
		// 	if (!this.tagFilter) {
		// 		return this.$store.state.allArticles.allArticles.filter(article => article.title.toLowerCase().includes(this.searchInput.toLowerCase()))
		// 	}
		// 	return this.$store.state.allArticles.allArticles.filter(article => article.tags.includes(this.tagFilter));
		// }
	},
	methods: {
		filteredTag(tag) {
			this.tagFilter = tag;
		}
	}

	// computed: mapGetters(['allArticles','postsCount']),
	// methods: mapActions(['fetchArticles']),
	// async mounted(){
	// 	// this.$store.dispatch('fetchArticles')
	// 	this.fetchArticles(4)
	// }
}

</script>

<style scoped>
.h-content {
	height: calc(100vh - 130px);
}
</style>
