import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/portfolio',
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
