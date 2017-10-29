import Vue from 'vue'
import Router from 'vue-router'

import Main from '../Main.vue'
import Home from '../Home'
import Catagry from '../Catagry'
import Cart from '../Cart'
import Me from '../Me'

import BookDetail from '../Details'

Vue.use(Router)

export default new Router({
	mode: 'history',
  base: __dirname,
    linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {path: '/home', name: 'Home', component: Home},
        {path: '/cart', name: 'Cart', component: Cart},
        {path: '/catagry', name: 'Catagry', component: Catagry},
        {path: '/me', name: 'Me', component: Me},
      ]
    },
    {path: '/bookDetail', name: 'BookDetail', component: BookDetail}
  ]
})
