import { createRouter, createWebHistory } from 'vue-router'
import app from '@/router/app'
import authRoutes from '@/router/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...app, ...authRoutes]
})

export default router
