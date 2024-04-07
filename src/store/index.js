import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article'
import allArticles from './modules/allArticles'
import allTags from './modules/allTags'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
// import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'


Vue.use(Vuex);
Vue.use(PerfectScrollbar)


export default new Vuex.Store({
	modules: {
		article,
		allArticles,
		allTags
	}
});
