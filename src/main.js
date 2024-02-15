import Vue from 'vue'
import store from './store'
import App from './App.vue'
import './tailwind.css'
import router from './router'
import axios from "axios"
import VueI18n from 'vue-i18n'
import en from "../src/assets/locales/en.json";
import ru from "../src/assets/locales/ru.json";
import VueFormulate from "@braid/vue-formulate";
import '@fortawesome/fontawesome-free/css/all.css'
// import './VueFormulate.config.js'


Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueI18n)
// Vue.use(VueFormulate)
Vue.use(VueFormulate, {
	classes: {
		error: 'text-purple-600'
	},
	errorMessages: {
		required: 'Это поле обязательно для заполнения',
		email: 'Пожалуйста, введите корректный адрес электронной почты'
		// Другие кастомные сообщения об ошибках
	}
  })

// Vue.use(VueFormulate, {
// 	errorMessages: {
// 		required: 'Это поле обязательно для заполнения',
// 		email: 'Пожалуйста, введите корректный адрес электронной почты'
// 		// Другие кастомные сообщения об ошибках
// 	}
//   })

Vue.filter('to-uppercase', function(value){
	return value.toUpperCase();
})

	// Готовые переводы сообщений локализаций
	const messages = {
		en,
		ru
	}

	// Создание экземпляра VueI18n с настройками
	const i18n = new VueI18n({
	locale: 'en', // установка локализации по умолчанию
	messages // установка сообщений локализаций
	})

	Vue.config.productionTip = false

new Vue({
	store,
	router,
	i18n,
	render: h => h(App),
}).$mount('#app')
