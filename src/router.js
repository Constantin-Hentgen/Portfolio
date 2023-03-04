import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Experiences from './views/Experiences.vue'
import Commitment from './views/Commitment.vue'
import Ambitions from './views/Ambitions.vue'
import NotFound from './views/NotFound.vue'

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
			component: Projects
		},
		{
			path: 'experiences',
			name: 'experiences',
			component: Experiences,
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
					component: () => import('./views/Experience.vue')
				},
				{
					path: 'student-job',
					name: 'student-job',
					component: () => import('./views/Experience.vue')
				},
				{
					path: 'it-support',
					name: 'it-support',
					component: () => import('./views/Experience.vue')
				},
				{
					path: 'fullstack-dev',
					name: 'fullstack-dev',
					component: () => import('./views/Experience.vue')
				}
			]
		},
		{
			path: 'commitment',
			name: 'commitment',
			component: Commitment
		},
		{
			path: 'ambitions',
			name: 'ambitions',
			component: Ambitions
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
					component: () => import('./views/Project.vue')
				},
				{
					path: 'horsensei',
					name: 'horsensei',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'prime-explo',
					name: 'prime-explo',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'citadelles',
					name: 'citadelles',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'vue-weather',
					name: 'vue-weather',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'task-manager',
					name: 'task-manager',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'touyube',
					name: 'touyube',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'text-parser',
					name: 'text-parser',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'php-experiment',
					name: 'php-experiment',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'clavier-bepo',
					name: 'clavier-bepo',
					component: () => import('./views/Project.vue')
				},
				{
					path: 'le-pouvoir-du-vote',
					name: 'le-pouvoir-du-vote',
					component: () => import('./views/Project.vue')
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
