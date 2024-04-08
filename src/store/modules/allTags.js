export default {

	state: {
        tags: [
			{
				"id": 1,
				// SocialAndLaborLaw
				"name":'social and labor law',
				"color":'gray'
			},
			{
				"id": 2,
				"name":'international law',
				"color":'green'
			},
			{
				"id": 3,
				"name":'corporate law',
				"color":'purple'
			},
			{
				"id": 4,
				"name":'history and law',
				"color":'yellow'
			},
			{
				"id": 5,
				"name":'other',
				"color":'blue'
			},
		],
		selectedArticleId: null
	},
	getters: {
		getSelectedTag: (state) => {
			return state.articles.find(article => article.id === state.selectedArticleId);
		}
	},
	mutations: {
		setSelectedTag(state, articleId) {
			state.selectedArticleId = articleId;
		}
	}

}