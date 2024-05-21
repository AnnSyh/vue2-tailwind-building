<template>
    <FormulateForm
      @submit="submitHandler"
      #default="{ isLoading }"
      class="max-w-lg"
    >
      <div class="text-center text-4xl">{{ $t('ContactWithMe') }}:</div>
      <!-- error-behavior="live" -->
      <!-- help="Please enter your name"
      help-class="text-xs text-gray-500" -->
      <!-- error-class="text-red-700 font-bold" -->
      <FormulateInput
        :label=" $t('YourName') "
        label-class="text-green-400 dark:text-yellow-400"
        input-class="border border-gray-400 rounded px-3 py-2 leading-none focus:border-green-500 dark:focus:border-yellow-500 outline-none border-box w-full"
        type="text" 
        name="name" 
        validation="required" 
      />
      <FormulateInput
        :label=" $t('YourEmail') "
        label-class="text-green-400 dark:text-yellow-400"
        input-class="border border-gray-400 rounded px-3 py-2 leading-none focus:border-green-500 dark:focus:border-yellow-500  outline-none border-box w-full"
        type="email" 
        name="email" 
        validation="required|email" 
      />
      <FormulateInput
        type="submit"
        :disabled="isLoading"
        :label="isLoading ? 'Loading...' : $t('ContactWithMe')"
        class="mt-4 flex px-4 py-2 items-center rounded-lg p-1 duration-300 ease-in-out bg-green-400 text-white  dark:bg-yellow-400 max-w-max"        
      />
    </FormulateForm>
  </template>
  
  <script>
   const WEB3FORMS_ACCESS_KEY = "1e7460b2-a237-40f4-a311-62750dda8784";

  export default {
    methods: {
      async submitHandler (data) {
        // await this.$axios.post('/my/api', data)

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            // message: this.message,
          }),
        });  
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }      

        alert(`Спасибо, ${data.name}`)
      }
    }
  }
  </script>
