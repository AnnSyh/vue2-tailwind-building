<template>
	<div class="">
		<!-- <div class="container m-auto dark:bg-gray-500 dark:text-white">
			<div class="flex gap-4 bg-gray-100 p-4 items-center justify-end dark:bg-gray-500 dark:text-white">
				<LocaleSwitcher />
				<router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">{{$t('main')}}</router-link>
				<router-link to="/photo"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">{{$t('photos')}}</router-link>
				<ThemsSwitcher/>
			</div>
		</div> -->
		
		<nav class="bg-gray-800">
			<div class="container m-auto flex items-center p-3 flex-wrap">
				
				<LocaleSwitcher />
				<button
					class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
					data-target="#navigation"
					@click="OpenCloseMenu()"
				>
					<i class="material-icons">menu</i>
				</button>
				<div
					class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
					id="navigation"
				>
					<div
					class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
					>
					<router-link to="/" 
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
					>
						<span>{{$t('main')}}</span>
					</router-link>
					<router-link to="/portfolio" 
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
					>
						<span>{{$t('portfolio')}}</span>
					</router-link>
					<router-link to="/articles"
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
					>
						<span>{{$t('articles')}}</span>
					</router-link>
					<router-link to="/"
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
					>
						<span>{{$t('achievements')}}</span>
					</router-link>
					<router-link to="/photo"
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
					>
						<span>{{$t('photos')}}</span>
					</router-link>
					</div>
				</div>
				<ThemsSwitcher/>
			</div>
		</nav>
	</div>
	
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue"
import ThemsSwitcher from "@/components/ThemsSwitcher.vue"

export default {
	name: 'NavBar',
	components: {
		LocaleSwitcher,
		ThemsSwitcher
	},
    data() {
      return {
        model: false,
      }
    },
	methods: {
		OpenCloseMenu() {
			document.querySelector('.top-navbar').classList.toggle('hidden')
		}
	}
  }
	
</script>

<style scoped>
.nav-target {
  display: none;
}
</style>
