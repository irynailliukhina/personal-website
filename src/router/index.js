import { createRouter, createWebHistory } from 'vue-router'
console.log(import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/portfolio/worktest/',
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: '/:notFound(.*)',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
