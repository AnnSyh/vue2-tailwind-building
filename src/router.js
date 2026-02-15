import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/pages/MainPage'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/photo',
		component: () => import('./components/pages/PhotosPage.vue')
	},
	{
		path: '/portfolio',
		component: () => import('./components/pages/PortfolioPage.vue')
	},
	{
		path: '/achievements',
		component: () => import('./components/pages/AchievementsPageCopy')
	},
	{
		path: '/achievementscopy',
		component: () => import('./components/pages/AchievementsPage.vue')
	},
	{
		path: '/articles',
		component: () => import('./components/pages/ArticlesPage.vue')
	},
	{
		path: '/articles/:id',
		component: () => import('./components/pages/ArticlePage.vue')
	}

]

export default new VueRouter({
	mode: 'history',
	routes
})
