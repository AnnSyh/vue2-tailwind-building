<template>
	<div>
		<nav class="fixed bottom-0 w-full bg-gray-800">
			<div class="container m-auto p-3 flex gap-4 justify-center">
				<div class="flex items-center text-white">© 2024 Ivan Syharevskiy</div>
				<button class="flex px-4 py-2 items-center rounded-lg p-1 duration-300 ease-in-out bg-green-400 dark:bg-yellow-400 text-white max-w-max"
						@click="showModalWindow()" 
				>
					Связаться со мной
				</button>
			</div>
		</nav>
		<ModalWindowConnect :show="showModal" @close="closeModal" />
	</div>
</template>

<script>
import ModalWindowConnect from '@/components/ModalWindowConnect.vue';

export default {
	name: 'footer-one',
	components: {
		ModalWindowConnect,
	},
    data() {
      return {
        model: false,
		showModal: false,
      }
    },
	methods: {
		OpenCloseMenu() {
			document.querySelector('.top-navbar').classList.toggle('hidden')
		},
		showModalWindow() {
			this.showModal = true;
		},
		closeModal() {
			this.showModal = false;
		}
	}
  }
	
</script>

<style scoped>
.nav-target {
  display: none;
}
</style>
