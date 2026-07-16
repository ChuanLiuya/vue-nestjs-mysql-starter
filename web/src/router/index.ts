import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/views/index/IndexPage.vue'
import TestPage from '@/views/test/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage,
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage,
    },
  ],
})

export default router
