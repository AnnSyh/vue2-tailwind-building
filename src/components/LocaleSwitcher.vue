<template>
	<div class="">
		<!-- <p>current lang = {{this.$i18n.locale}}</p> -->
		<select 
			id="countries" 
			class="bg-green-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:bg-yellow-400 dark:placeholder-gray-400 dark:text-white"
			v-model="locale"
			@change="switchLocale(locale)"
		>
			<option 
				v-for="locale in locales"
				:key="locale"
			>
				{{locale}}
			</option>
		</select>

	</div>
	
</template>

<script>
  export default {
	name:'LocaleSwitcher',
	
	data() {
		return {
			locales:  ['en','ru'],
			locale: this.$i18n.locale // получаю текущий язык
		}
	},

	methods: {
		switchLocale(locale){
			if (this.$i18n.locale !== locale) {
				this.$i18n.locale = locale
			}
		},
	},

  }
</script>

<style scoped>

</style>
