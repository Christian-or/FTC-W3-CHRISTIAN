import { createRouter, createWebHistory } from 'vue-router'
const FrontendLayout = () => import('@/layouts/FrontendLayout.vue')
const BackendLayout = () => import('@/layouts/BackendLayout.vue')
const AuthLayout = () => import('@/layouts/AuthLayout.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontendLayout,
      children: [
        {
          path: '',
          name: 'frontend.welcome',
          meta: { title: 'WELCOME' },
          component: () => import('@/views/frontend/welcome/index.vue')
        },
        {
          path: '/pricing',
          name: 'frontend.pricing',
          meta: { title: 'PRICING' },
          component: () => import('@/views/frontend/pricing/index.vue')
        },
        {
          path: '/about-us',
          name: 'frontend.about',
          meta: { title: 'ABOUT US' },
          component: () => import('@/views/frontend/about/index.vue')
        }
      ]
    }
  ],
})

export default router
