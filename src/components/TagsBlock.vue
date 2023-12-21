<template>
	<div class="flex gap-2">
		<div  	v-for="(tag, index) in tags"
				:key="index"
				class="text-center"
		>
			<span :class="'text-' + tag.color + '-500 bg-' + tag.color + '-200 h-10 rounded px-2 py-1 text-xs select-none'">
				{{tag.name}}
			</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'TagsBlock',

    data() {
      return {
		tags:[
			{
				"id": 1,
				"name":'Info',
				"color":'gray'
			},
			{
				"id": 2,
				"name":'Success',
				"color":'green'
			},
			{
				"id": 3,
				"name":'Danger',
				"color":'red'
			},
			{
				"id": 4,
				"name":'Warning',
				"color":'yellow'
			},
		]
      }
    },
  }
	
</script>

<style scoped>

</style>
