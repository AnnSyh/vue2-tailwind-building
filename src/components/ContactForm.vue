<template>
    <FormulateForm
      @submit="submitHandler"
      #default="{ isLoading }"
      class="max-w-lg"
    >
      <div class="text-center text-4xl">Связаться со мной</div>
      <!-- error-behavior="live" -->
      <!-- help="Please enter your name"
      help-class="text-xs text-gray-500" -->
      <!-- error-class="text-red-700 font-bold" -->
      <FormulateInput
        label="Ваш имя"
        label-class="text-green-400"
        input-class="border border-gray-400 rounded px-3 py-2 leading-none focus:border-green-500 outline-none border-box w-full"
        type="text" 
        name="name" 
        validation="required" 
      />
      <FormulateInput
        label="Ваш email"
        input-class="border border-gray-400 rounded px-3 py-2 leading-none focus:border-green-500 outline-none border-box w-full"
        type="email" 
        name="email" 
        validation="required|email" 
      />
      <FormulateInput
        type="submit"
        :disabled="isLoading"
        :label="isLoading ? 'Loading...' : 'Связаться со мной'"
        class="mt-4 flex px-4 py-2 items-center rounded-lg p-1 duration-300 ease-in-out bg-green-400 text-white max-w-max"        
      />
    </FormulateForm>
  </template>
  
  <script>
  export default {
    methods: {
      async submitHandler (data) {
        // await this.$axios.post('/my/api', data)
        alert(`Спасибо, ${data.name}`)
      }
    }
  }
  </script>
