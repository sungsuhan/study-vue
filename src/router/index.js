import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import List from '../components/board/List'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
