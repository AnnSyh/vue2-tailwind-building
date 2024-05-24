<template> <!-- 4 -кол-во карточек в строчку -->
	<div class="container m-auto bg-white dark:bg-gray-700 dark:text-white"
		:class="{'h-content' : (filteredArticles.length <= 4)}" 
	>

		<div class="mx-auto my-12 px-4">
			<!-- <div class="md:flex justify-between items-center mb-8">
				<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
					{{ $t('articles') }}:
					222 {{this.$store.state.allArticles.allArticles}}<br/>
					333 {{(filteredArticles).length}}
				</h2>

			</div> -->

			<div class="flex overflow-x-auto gap-2">
				<div 	v-for="(tag, index) in this.$store.state.allTags.tags" :key="index"
						class="text-center cursor-pointer"
				>
					<button
							@click="filteredArticle(tag.name)" 
							:class="[{'border border-black': isSelect === tag.name }, 
									'text-' + tag.color + '-500 bg-' + tag.color + '-200 h-10 rounded px-2 py-1 text-xs whitespace-nowrap']"
						>
					{{ $t(tag.name) }} 
					</button>
				</div>
					<button
						@click="filteredSbros()" 
						:class="'text-red-500 bg-red-200 h-10 rounded px-2 py-1 text-xs whitespace-nowrap'"
					>
					<!-- reset filters -->
					{{$t('ResetFilters')}}
					</button>
			</div>

			<input type="text" v-model="searchInput" class="border border-gray-300 w-full my-4 px-4 py-4 rounded"
				:placeholder="$t('searchByArticleTitles')">

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<ArticleCard v-for="(article, index) in filteredArticles" 
					:searchInput="searchInput"
					:key="index" 
					:article="article" 
					:isSelect="isSelect" 
				/>
			</div>
		</div>

	</div>
</template>

<script>
import ArticleCard from '@/components/article/ArticleCard.vue'

export default {
	components: {
		ArticleCard,
	},

	data() {
		return {
			searchInput: '',
			filterTag: '',
			isSelect: '',
		}
	},
	computed: {
		filteredArticles() {
			return this.$store.state.allArticles.allArticles.filter(article => {
				// console.log('article.title = ', article.title) //ключ
				// console.log('перевод = ', this.$t(article.title));//значение ключа на соот яз
				const matchesTitle = this.$t(article.title).toLowerCase().includes(this.searchInput.toLowerCase())
				const matchesTag = !this.filterTag || article.tags.includes(this.filterTag);
				return matchesTitle && matchesTag;
				}	
			);
		},

	},
	methods: {
		filteredArticle(tag){
			this.filterTag = tag;
			this.isSelect = tag;
		},
		filteredSbros() {
			this.filterTag = '';
			this.isSelect = ''

		},
	}
}

</script>

<style scoped>
.h-content {
	height: calc(100vh - 130px);
}

</style>
