<template>
    <div  v-if="show" 
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
    >
      <div class="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-700 dark:text-white relative">
        <button @click="$emit('close')" class="py-2 px-4 rounded-full absolute top-2 right-2 bg-green-400 text-white  dark:bg-yellow-400">x</button>
        <div class="max-w-lg m-auto my-4">
              <ContactForm/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ContactForm from '@/components/ContactForm.vue'

  export default {
    components: {
      ContactForm
    },
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },

  };
  </script>