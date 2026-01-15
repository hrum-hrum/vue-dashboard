<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { isLoggedIn, logout } from './auth'

const router = useRouter()
// const { isLoggedIn, logout } = useAppAuth()

const onUserLogout = () => {
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="wrapper">
    <nav class="navigation">
      <div class="navigation-left">
        <!-- <a href="./dashboard.html" class="router-link--active"></a> -->
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <!-- <a href="./tasks.html">Tasks</a> -->
        <RouterLink to="/tasks">Tasks</RouterLink>
        <!-- <a href="./settings/profile.html">Settings</a> -->
        <RouterLink to="/settings">Settings</RouterLink>
      </div>
      <div class="navigation-right">
        <RouterLink v-if="!isLoggedIn" to="/login"> Login</RouterLink>
        <button v-else class="btn-logout" @click="onUserLogout">Logout</button>
      </div>
    </nav>
    <main class="container">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>
