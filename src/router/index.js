import { createRouter, createWebHashHistory } from 'vue-router'

import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import TopList from '@/views/topList'
import Search from '@/views/search'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/topList',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
