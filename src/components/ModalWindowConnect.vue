<template>
    <div  v-if="show" 
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
    >
      <div class="max-w-3xl mx-auto p-8 bg-white relative">
        <button @click="$emit('close')" class="py-2 px-4 bg-gray-200 rounded-full absolute top-0 right-0">x</button>
        <ConnectWithMe/>
      </div>
    </div>
  </template>
  
  <script>
  import ConnectWithMe from '@/components/ConnectWithMe.vue';

  export default {
    components: {
     ConnectWithMe
    },
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },

  };
  </script>