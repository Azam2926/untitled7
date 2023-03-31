import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'

const app: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'app',
    component: MainLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'date',
        name: 'date',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/DateView.vue')
      }
    ]
  }
]
export default app
