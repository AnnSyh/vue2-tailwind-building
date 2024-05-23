export default {

	state: {
        allArticles:  [
			{
				"id": 1,
				"title": 'RulesOfAlternative',
				"tags": ["social and labor law", "international law"],
				"url": "https://via.placeholder.com/600/92c952",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952", 
				"content": 'content 1' 
			},
			{
				"id": 2,
				"title": 'DoYouSmoke',
				"tags": ["international law"],
				"url": "https://mylaw.fun/wp-content/uploads/2021/09/scale_1200.webp",
				"thumbnailUrl": "https://mylaw.fun/wp-content/uploads/2021/09/scale_1200.webp", 
				"content": 'content 2' 
			},
			{
				"id": 3,
				"title": 'ChangesInTheProcedure',
				"tags": ["corporate law"],
				"url": "https://mylaw.fun/wp-content/uploads/2021/08/medosmotr.jpg",
				"thumbnailUrl": "https://mylaw.fun/wp-content/uploads/2021/08/medosmotr.jpg", 
				"content": 'content 3' 
			},
			{
				"id": 4,
				"title": 'WhatHasChangedInTwoYears',
				"tags": ["history and law"],
				"url": "https://mylaw.fun/wp-content/uploads/2021/08/ege-oplata.png",
				"thumbnailUrl": "https://mylaw.fun/wp-content/uploads/2021/08/ege-oplata.png", 
				"content": 'content 4' 
			},
			{
				"id": 5,
				"title": 'WhichLiteraryHeroes',
				"tags": ["other", "history and law"],
				"url": "https://mylaw.fun/wp-content/uploads/2021/08/scale_1200-1.webp",
				"thumbnailUrl": "https://mylaw.fun/wp-content/uploads/2021/08/scale_1200-1.webp", 
				"content": 'content 5' 
			},
		],
		selectedArticleId: null,
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