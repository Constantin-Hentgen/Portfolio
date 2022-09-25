import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Experience from './views/Experience.vue'
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
      path: `/${i18n.locale}`,
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
					path: 'experience',
					name: 'experience',
					component: Experience
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
