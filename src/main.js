import Vue from 'vue'
import App from './App.vue'
import './tailwind.css'
import router from './router'
import axios from "axios"
import VueI18n from 'vue-i18n'
import en from "../src/assets/locales/en.json";
import ru from "../src/assets/locales/ru.json";

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueI18n)

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
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
