import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/input',
        name: 'input',
        component: () => import('../views/input/input.vue')
      },
      {
        path: '/button',
        name: 'button',
        component: () => import('../views/button/index.vue')
      },
      {
        path: '/param',
        name: 'param',
        component: () => import('../views/param/index.vue')
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 