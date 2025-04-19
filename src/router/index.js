// router/index.js (to complete the setup)
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/meeting-resume',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/',
    redirect: '/meeting-resume'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router