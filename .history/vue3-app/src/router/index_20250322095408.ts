import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
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
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 