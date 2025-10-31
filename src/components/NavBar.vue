<template>
	<nav class="bg-gray-800">
		<div class="container m-auto flex items-center p-3 flex-wrap">

			<div class="mr-auto relative group">
                <button 
                    class="inline-flex p-3  rounded lg:hidden  outline-none "
                    @click="toggleMobileMenu"
                >
                    <div class="menu-icon-container">
                        <span class="menu-line" :class="{ 'line-1-open': isMobileMenuOpen }"></span>
                        <span class="menu-line" :class="{ 'line-2-open': isMobileMenuOpen }"></span>
                        <span class="menu-line" :class="{ 'line-3-open': isMobileMenuOpen }"></span>
                    </div>
                </button>
				
				<div
					:class="{ 'hidden': !isMobileMenuOpen, 'flex': isMobileMenuOpen }"
					class="absolute bg-gray-800 rounded-lg items-start flex flex-col z-10 mt-2
                           lg:relative lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto  lg:mt-0 
                           "
				>
					<router-link to="/" 
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
						@click="closeMobileMenu"
					>
						<span>{{$t('main')}}</span>
					</router-link>
					<router-link to="/portfolio" 
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
						@click="closeMobileMenu"
					>
						<span>{{$t('portfolio')}}</span>
					</router-link>
					<router-link to="/articles"
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
						@click="closeMobileMenu"
					>
						<span>{{$t('articles')}}</span>
					</router-link>
					<router-link to="/achievements"
						class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
						@click="closeMobileMenu"
					>
						<span>{{$t('achievements')}}</span>
					</router-link>
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
import { ref } from "vue"   
import LocaleSwitcher from "@/components/LocaleSwitcher.vue"
import ThemsSwitcher from "@/components/ThemsSwitcher.vue"

export default {
	name: 'NavBar',
	components: {
		LocaleSwitcher,
		ThemsSwitcher
	},
	setup() {
		const isMobileMenuOpen = ref(false);
		
		const toggleMobileMenu = () => {
			isMobileMenuOpen.value = !isMobileMenuOpen.value;
		};
		
		const closeMobileMenu = () => {
			isMobileMenuOpen.value = false;
		};
		
		return { 
			isMobileMenuOpen,
			toggleMobileMenu,
			closeMobileMenu
		};
	},
	methods: {
		toggleTheme() {
			// Ваша существующая логика смены темы
		}
	}
}
</script>

<style scoped>
.menu-icon-container {
    @apply  relative cursor-pointer flex flex-col justify-between;
    width: 30px;
    height: 24px;
}

.menu-line {
    @apply block w-full;
    @apply bg-green-400 dark:bg-yellow-400;
    @apply transition-all duration-300 ease-in-out origin-center;
    height: 3px;
    border-radius: 2px;
}

.line-1-open {
    transform: translateY(10.5px) rotate(45deg);
}

.line-2-open {
    @apply opacity-0 scale-0;
}

.line-3-open {
    transform: translateY(-10.5px) rotate(-45deg);
}

</style>
