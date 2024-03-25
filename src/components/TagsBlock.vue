<template>
	<div class="flex flex-wrap gap-2">
		<!-- <div  	v-for="(tag, index) in this.$store.state.allTags.tags" -->
			<!-- <span :class="'text-' + tag.color + '-500 bg-' + tag.color + '-200 h-10 rounded px-2 py-1 text-xs select-none'"></span>
				tags = {{tags}}
			</span> -->
			<!-- 1111 tags = {{tags}} -->
		<div  	v-for="(tag, index) in tags"
				:key="index"
				class="text-center"
		>
			<!-- <span :class="'text-' + tag.color + '-500 bg-' + tag.color + '-200 h-10 rounded px-2 py-1 text-xs select-none'"> -->
			<span class="text-blue-500 bg-blue-200 h-10 rounded px-2 py-1 text-xs select-none"
			>
				{{tag}}
			</span>

			<!-- <div 	v-for="(dataTag, index) in this.$store.state.allTags.tags"
					:key="index"
					class="text-center cursor-pointer"
			>
				<div v-if='(tag === dataTag)'>
					<button
						:class="'text-' + tag.color + '-500 bg-' + tag.color + '-200 h-10 rounded px-2 py-1 text-xs select-none'"
					>
						{{tag.name}} 
					</button>
				</div>
			</div> -->


		</div>
	</div>
</template>

<script>

export default {
	name: 'TagsBlock',
	props: {
		tags: {
			type: Array,
			required: true
		}
	}
}
	
</script>

<style scoped>

</style>
