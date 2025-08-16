import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',  // <- 小寫
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio/:projectName',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true   // 這樣可以把 :projectName 當作 props
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'  // 避免找不到路徑
  }
]

const router = createRouter({
  history: createWebHistory('/meeting-resume/'), // <- 設定 base
  routes
})

export default router
