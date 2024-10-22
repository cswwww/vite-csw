/*
 * @Date: 2024-10-22 18:18:22
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-22 18:54:17
 * @FilePath: \vite-csw\src\router\index.js
 * @Description: 路由
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/:pathMatch(.*)*', name: '404', component: () => import('../views/404.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
