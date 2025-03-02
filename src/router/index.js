/*
 * @Date: 2024-10-22 18:18:22
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-27 11:04:39
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

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // document.title = to.meta.title || '默认标题';

  // 获取目标路由的参数
  const routeParams = to.params // 路径参数（如 /user/:id 中的 id）
  const routeQueries = to.query // 查询参数（如 ?q=abc 中的 q）

  // 合并参数（可选）
  const allParams = { ...routeParams, ...routeQueries }

  // 在这里根据参数执行逻辑（例如验证、日志记录等）
  console.log('拦截器触发', `目标地址: ${to.fullPath}`)
  console.log('路径参数:', routeParams)
  console.log('查询参数:', routeQueries)
  console.log('全部参数:', allParams)

  next()
})

export default router
