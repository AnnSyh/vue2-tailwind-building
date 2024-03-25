import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article'
import allArticles from './modules/allArticles'
import allTags from './modules/allTags'


Vue.use(Vuex);


export default new Vuex.Store({
	modules: {
		article,
		allArticles,
		allTags
	}
});
