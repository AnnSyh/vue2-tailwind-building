<template>
	<nav class="bg-gray-800">
		<div class="container m-auto flex items-start items-center1 p-3 flex-wrap">

			<div class="mr-auto">
				<button
					class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden  hover:text-white outline-none nav-toggler"
					data-target="#navigation"
					@click="OpenCloseMenu()"
				>
					<i class="fa-solid fa-bars"></i>
				</button>
				<div
					class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
					id="navigation"
				>
					<div
						class="absolute bg-gray-800 rounded-lg lg:relative lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start flex flex-col lg:h-auto z-10"
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
					<router-link to="/achievements"
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
					>
						<span>{{$t('achievements')}}</span>
					</router-link>
					<!-- <router-link to="/photo"
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
					>
						<span>{{$t('photos')}}</span>
					</router-link> -->
					</div>
				</div>
			</div>
			
			<div class="flex gap-4">
				<ThemsSwitcher/>
				<LocaleSwitcher />
			</div>

		</div>
	</nav>
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
