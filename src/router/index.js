import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import List from '../components/board/List'
import Join from '@/components/user/Join'
import Login from '@/components/user/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board/list',
    name: 'list',
    component: List
  },
  {
    path: '/user/join',
    name: 'join',
    component: Join
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
