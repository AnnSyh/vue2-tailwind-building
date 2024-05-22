<template>
    <FormulateForm
      @submit="submitHandler"
      #default="{ isLoading }"
      class="max-w-lg"
    >
    <span v-if="successMessage">{{successMessage}}</span>
    <!-- error-behavior="live" -->
    <!-- help="Please enter your name"
      help-class="text-xs text-gray-500" -->
      <!-- error-class="text-red-700 font-bold" -->
      <div v-else>
        <div class="text-center text-2xl mb-4">
          <!-- Если вы не нашли ответ на свой вопрос, буду рад ответить на него -->
          {{ $t('IfYouHaventFoundAnswer') }}:
        </div>
        <div class="text-center text-4xl">{{ $t('ContactWithMe') }}:</div>
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
          :label=" $t('YourMessage') "
          label-class="text-green-400 dark:text-yellow-400"
          input-class="border border-gray-400 rounded px-3 py-2 leading-none focus:border-green-500 dark:focus:border-yellow-500  outline-none border-box w-full"
          type="textarea" 
          name="message" 
          validation="required|max:100,length" 
        />
        <FormulateInput
          type="submit"
          :disabled="isLoading"
          :label="isLoading ? 'Loading...' : $t('ContactWithMe')"
          class="mt-4 flex px-4 py-2 items-center rounded-lg p-1 duration-300 ease-in-out bg-green-400 text-white  dark:bg-yellow-400 max-w-max"        
        />
      </div>

      
    </FormulateForm>
  </template>
  
  <script>
   const WEB3FORMS_ACCESS_KEY = "1e7460b2-a237-40f4-a311-62750dda8784";

  export default {
    data() {
      return {
        successMessage: '',
      }
    },
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
            name: data.name,
            email: data.email,
            message: data.message,
          }),
        });  
        const result = await response.json();
        if (result.success) {
          console.log(result);
          //закрыть всплывашку и вывести успешное сообщение
          this.successMessage = 'Поздравляю, ваше ообщение успешно отправленно!';
        }      

        // alert(`Спасибо, ${data.name}`)
      }
    }
  }
  </script>
