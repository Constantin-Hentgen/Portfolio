import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import TextPage from './views/TextPage.vue'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
	{
		path: '*',
		component: NotFound
	},
    {
      path: '/:lang/',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
		{
			path: 'projects',
			name: 'projects',
			component: List
		},
		{
			path: 'experiences',
			name: 'experiences',
			component: List,
		},
		{
			path: 'experience',
			name: 'experience',
			component: {
				render (c) { return c('router-view') }
			},
			children: [
				{
					path: 'canal-plus',
					name: 'canal-plus',
					component: TextPage
				},
				{
					path: 'student-job',
					name: 'student-job',
					component: TextPage
				},
				{
					path: 'it-support',
					name: 'it-support',
					component: TextPage
				},
				{
					path: 'fullstack-dev',
					name: 'fullstack-dev',
					component: TextPage
				}
			]
		},
		{
			path: 'commitment',
			name: 'commitment',
			component: TextPage
		},
		{
			path: 'ambitions',
			name: 'ambitions',
			component: TextPage
		},
		{
			path: 'project',
			name: 'project',
			component: {
				render (c) { return c('router-view') }
			},
			children: [
				{
					path: 'mon-site-perso',
					name: 'mon-site-perso',
					component: TextPage
				},
				{
					path: 'horsensei',
					name: 'horsensei',
					component: TextPage
				},
				{
					path: 'prime-explo',
					name: 'prime-explo',
					component: TextPage
				},
				{
					path: 'citadelles',
					name: 'citadelles',
					component: TextPage
				},
				{
					path: 'vue-weather',
					name: 'vue-weather',
					component: TextPage
				},
				{
					path: 'task-manager',
					name: 'task-manager',
					component: TextPage
				},
				{
					path: 'touyube',
					name: 'touyube',
					component: TextPage
				},
				{
					path: 'text-parser',
					name: 'text-parser',
					component: TextPage
				},
				{
					path: 'php-experiment',
					name: 'php-experiment',
					component: TextPage
				},
				{
					path: 'clavier-bepo',
					name: 'clavier-bepo',
					component: TextPage
				},
				{
					path: 'le-pouvoir-du-vote',
					name: 'le-pouvoir-du-vote',
					component: TextPage
				}
			]
		},
      ]
    }
  ],
	scrollBehavior () {
		return { x: 0, y: 0 };
	}
})
