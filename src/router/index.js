import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/work',
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: '/:notFound(.*)',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
