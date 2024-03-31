export default {

	state: {
        allArticles:  [
			{
				"id": 1,
				"title": 'Rules of alternative jurisdiction for workers',
				"tags": ["social and labor law", "international law"],
				"url": "https://via.placeholder.com/600/92c952",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952", 
				"content": 'Контент статьи 1' 
			},
			{
				"id": 2,
				"title": 'Do you smoke? - No work! Rules',
				"tags": ["international law"],
				"url": "https://via.placeholder.com/600/92c952",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952", 
				"content": 'Контент статьи 2' 
			},
			{
				"id": 3,
				"title": 'Changes in the procedure for passing a medical examination from April 1, 2021',
				"tags": ["corporate law"],
				"url": "https://via.placeholder.com/600/92c952",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952", 
				"content": 'Контент статьи 3' 
			},
			{
				"id": 4,
				"title": 'What has changed in two years in the remuneration of teachers at the State Academy of Sciences?',
				"tags": ["history and law"],
				"url": "https://via.placeholder.com/600/92c952",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952", 
				"content": 'Контент статьи 3' 
			},
			{
				"id": 5,
				"title": 'Which literary heroes can go to prison?',
				"tags": ["other", "history and law"],
				"url": "https://via.placeholder.com/600/92c952",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952", 
				"content": 'Контент статьи 3' 
			},
		],
		selectedArticleId: null
	},
	getters: {
		getSelectedArticle: (state) => {
			return state.articles.find(article => article.id === state.selectedArticleId);
		}
	},
	mutations: {
		setSelectedArticle(state, articleId) {
			state.selectedArticleId = articleId;
		}
	}

}