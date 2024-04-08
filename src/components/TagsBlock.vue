<template>
	<div class="flex flex-wrap">
		<div v-for="(tagState, index) in this.$store.state.allTags.tags" :key="index" 
		>
		<div  	v-for="(tag, index) in tags"
				:key="index"
				class="text-center"
			>
				<div v-if="tag === tagState.name"
					:class="[{'border border-black': isSelect === tagState.name }, 
						'text-' + tagState.color + '-500 bg-' +  tagState.color + '-200 h-10 rounded px-2 py-1 text-xs flex items-center mr-2'
						]"
				>
					{{ $t(tag) }} 
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'TagsBlock',
	props: {
		tags: {
			type: Array
		},
		isSelect:{
			type: String
		}
	}
}
	
</script>

<style scoped>


</style>
