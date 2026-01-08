<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
    </nav>
    <main class="container">
      <RouterView v-slot="{ Component }">
        <Transition name="fade1">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>
