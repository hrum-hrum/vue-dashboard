<script setup>
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const onHomeLinkClick = () => {
//   router.push('/dashboard')
// }
</script>

<template>
  <div class="not-found">
    <h1>404 — Страница не найдена</h1>
    <!-- <a href="./dashboard.html">На главную</a> -->
    <!-- <button @click="onHomeLinkClick">На главную</button> -->
    <RouterLink to="/">На главную</RouterLink>
  </div>
</template>
