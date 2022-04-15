import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import i18n from './i18n'

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
      path: '/:lang',
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
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        },
        {
          path: 'mon-site-perso',
          name: 'mon-site-perso',
          component: () => import(/* webpackChunkName: "contact" */ './views/MonSitePerso.vue')
        },
        {
          path: 'horsensei',
          name: 'horsensei',
          component: () => import(/* webpackChunkName: "contact" */ './views/Horsensei.vue')
        },
        {
          path: 'prime-explo',
          name: 'prime-explo',
          component: () => import(/* webpackChunkName: "contact" */ './views/PrimeExplo.vue')
        },
        {
          path: 'citadelles',
          name: 'citadelles',
          component: () => import(/* webpackChunkName: "contact" */ './views/Citadelles.vue')
        },
        {
          path: 'vue-weather',
          name: 'vue-weather',
          component: () => import(/* webpackChunkName: "contact" */ './views/VueWeather.vue')
        },
        {
          path: 'task-manager',
          name: 'task-manager',
          component: () => import(/* webpackChunkName: "contact" */ './views/TaskManager.vue')
        },
        {
          path: 'touyube',
          name: 'touyube',
          component: () => import(/* webpackChunkName: "contact" */ './views/Touyube.vue')
        },
        {
          path: 'text-parser',
          name: 'text-parser',
          component: () => import(/* webpackChunkName: "contact" */ './views/TextParser.vue')
        },
        {
          path: 'php-experiment',
          name: 'php-experiment',
          component: () => import(/* webpackChunkName: "contact" */ './views/PhpExperiment.vue')
        },
        {
          path: 'clavier-bepo',
          name: 'clavier-bepo',
          component: () => import(/* webpackChunkName: "contact" */ './views/ClavierBepo.vue')
        },
        {
          path: 'le-pouvoir-du-vote',
          name: 'le-pouvoir-du-vote',
          component: () => import(/* webpackChunkName: "contact" */ './views/LePouvoirDuVote.vue')
        }
      ]
    }
  ]
})
