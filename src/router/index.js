import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notes.vue')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import(/* webpackChunkName: "about" */ '../views/Groups.vue')
  },
  {
    path: '/managments',
    name: 'Managments',
    component: () => import(/* webpackChunkName: "about" */ '../views/Managments.vue')
  },
  {
    path: '/usescase',
    name: 'Usescase',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usescase.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue')
  },
  {
    path: '/createuser',
    name: 'CreateUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateUser.vue')
  },
  {
    path: '*',
    name: 'any',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
