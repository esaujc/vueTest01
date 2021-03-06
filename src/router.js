import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inhabitants',
      name: 'Inhabitants',
      component: () => import('./views/Inhabitants.vue')
    },
    {
      path:'/inhabitants/:id',
      name: 'Inhabitant',
      component: () => import('./views/Inhabitant.vue')
    }
  ]
})
