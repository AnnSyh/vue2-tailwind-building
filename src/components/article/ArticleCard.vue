<template>
	<div class="rounded border md:shadow w-full overflow-hidden" >
		<div v-if="article.url">
			<router-link
				:to="'/articles/' + article.id" 
			>
				<img 	class="w-full h-48 object-cover" 
						:src="article.url" 
						:alt="article.title" 
				/>
			</router-link>
		</div>
		<div v-else>
			<router-link
				:to="'/articles/' + article.id" 
			>
			<img 	class="w-full h-48 object-cover" 
					src="@/assets/images/default-img.png" 
					:alt="article.title" 
			>
			</router-link>
		</div>
		<div class="px-4 py-4">
			<!-- <div class="text-xs text-gray-600 font-medium">
				<a href="#" class="uppercase hover:underline">
					recipe
				</a>
				<span class="mx-1">&bull;</span>
				<span>May 4, 2020</span>
			</div> -->
			<TagsBlock :tags="article.tags" :isSelect="isSelect"/>
			<h3 class="font-semibold text-gray-800 my-4 text-lg dark:text-white">
				<!-- {{ highlightText(article.title) }} -->
				{{article.title}}
			</h3>
			<!-- <h3 class="font-semibold text-gray-800 my-4 text-lg dark:text-white">
				{{article.title}}
			</h3> -->

			<!-- <div class="text-gray-700">
				{{article.content}}
			</div> -->

			<div class="mt-4">
				<router-link
					:to="'/articles/' + article.id" 
					class="py-2 text-indigo-600 text-xs uppercase hover:underline"
				>
				{{ $t('readMore') }} <span>&rarr;</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import TagsBlock from '@/components/TagsBlock.vue'

export default {
	components: {
		TagsBlock,
	},
	props: {
		article: {
			type: Object,
			required: true
		},
		isSelect:{
			type: String
		},
		searchInput:{
			type: String
		},
	},
	methods: {
		highlightText(text) {
			return text.replace(new RegExp(this.searchInput, 'gi'), match => 
				`<span style="background-color: yellow;">${match}</span>`
			);
		}
	}
}
	
</script>

<style scoped>

</style>
