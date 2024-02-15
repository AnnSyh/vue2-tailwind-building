<template>
	<div class="max-w-lg m-auto my-4">
        <div class="text-center text-2xl mb-4">Если вы не нашли ответ на свой вопрос, буду рад ответить на него</div>
        <ContactForm/>
	</div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
	name: 'ConnectWithMe',
	components: {
        ContactForm,
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