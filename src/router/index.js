import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: 'router-link--intermediate',
  linkExactActiveClass: 'router-link--active',

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TasksView.vue'),
    },
    {
      path: '/tasks/:id',
      name: 'task',
      component: () => import('../views/TaskDetailsView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      children: [
        { path: '', redirect: '/settings/profile' },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/ProfileView.vue'),
        },
        {
          path: 'security',
          name: 'security',
          component: () => import('../views/SecurityView.vue'),
        },
      ],
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/NotFoundView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      // alias: '404',
      redirect: '/404',
    },
  ],
})

export default router
