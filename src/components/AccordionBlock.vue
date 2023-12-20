<template>
	<div class="">
		<div class="tab__header">
			<a 	href="#" 
				class="tab__link p-4 block bg-gray-400 hover:bg-gray-6z00 no-underline text-white border-b-2 border-white flex justify-between" 
				@click.prevent="active = !active"
			>
				<strong>{{title}}</strong>
				<span class="down-Arrow" v-show="!active">&#9660;</span>
				<span class="up-Arrow" v-show="active">&#9650;</span>
			</a>
		</div>
		<div class="tab__content p-2" v-show="active">
			<slot />
		</div>            
	</div>
</template>

<script>
export default {
	name: 'AccordionBlock',
	props: [
		'title'
	],
    data() {
      return {
		active: false,
      }
    }
  }
	
</script>

<style scoped>

</style>
