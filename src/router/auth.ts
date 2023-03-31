import type { RouteRecordRaw } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

export const AUTH_R_NAME = {
  LOGIN: 'login',
  REGISTER: 'register'
}

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: AUTH_R_NAME.LOGIN,
        component: LoginView,
        alias: ['/login']
      },
      {
        path: 'register',
        name: AUTH_R_NAME.REGISTER,
        component: RegisterView,
        alias: ['/register']
      }
    ]
  }
]
export default authRoutes
