export default {
    actions: {
		async fetchArticles(ctx, limit = 3){
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/photos?_limit=" + limit
            )
            const articles = await res.json()
            ctx.commit('updateArticles',articles)
        }
	},
	mutations: {
		updateArticles(state, articles){
            state.articles = articles
        }
	},
	state: {
        articles:[],
	},
	getters: {
        allArticles(state){
            return state.articles
        },
        postsCount(state){
            return state.articles.length
        }
	},
}