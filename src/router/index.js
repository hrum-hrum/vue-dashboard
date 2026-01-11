import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: 'router-link--active',
  linkExactActiveClass: 'router-link--intermediate',

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: DashboardView,
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      redirect: '/',
    },
    {
      name: 'tasks',
      path: '/tasks',
      component: () => import('../views/TasksView.vue'),
    },
    {
      name: 'task',
      path: '/tasks/:id',
      props: true,
      component: () => import('../views/TaskDetailsView.vue'),
    },
    {
      name: 'settings',
      path: '/settings',
      component: () => import('../views/SettingsView.vue'),
      children: [
        { path: '', redirect: '/settings/profile' }, //Полный путь от корня
        {
          name: 'profile',
          path: 'profile',
          component: () => import('../views/ProfileView.vue'),
        },
        {
          name: 'security',
          path: 'security',
          component: () => import('../views/SecurityView.vue'),
        },
      ],
    },
    {
      name: '404',
      path: '/404',
      component: () => import('../views/NotFoundView.vue'),
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      // alias: '404',
      redirect: '/404',
    },
  ],
})

export default router
