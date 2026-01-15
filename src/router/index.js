import { isLoggedIn } from '@/auth'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

// const { isLoggedIn } = useAppAuth()

const router = createRouter({
  linkActiveClass: 'router-link--active',
  linkExactActiveClass: 'router-link--intermediate',

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/dashboard',
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      meta: { requiresAuth: true },
      component: DashboardView,
    },
    {
      name: 'tasks',
      path: '/tasks',
      meta: { requiresAuth: true },
      component: () => import('../views/TasksView.vue'),
    },
    {
      name: 'task',
      path: '/tasks/:id',
      props: true,
      meta: { requiresAuth: true },
      component: () => import('../views/TaskDetailsView.vue'),
    },
    {
      name: 'settings',
      path: '/settings',
      meta: { requiresAuth: true },
      component: () => import('../views/SettingsView.vue'),
      children: [
        { name: 'default', path: '', redirect: '/settings/profile' }, //Полный путь от корня
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
      name: 'login',
      path: '/login',
      component: LoginView,
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

router.beforeEach(async (to, from, next) => {
  // alert(to.meta.requiresAuth)
  // alert(isLoggedIn.value)
  if (to.meta.requiresAuth && !isLoggedIn.value) {
    //&& to.name !== 'login'
    // перенаправить пользователя на страницу входа
    //alert('need auth')
    next('/login')
  } else {
    next()
  }
})

export default router
