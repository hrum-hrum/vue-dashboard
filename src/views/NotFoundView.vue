<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onHomeLinkClick = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div class="not-found">
    <h1>404 — Страница не найдена</h1>
    <!-- <a href="./dashboard.html">На главную</a> -->
    <a href="/" @click.prevent="onHomeLinkClick">На главную</a>
  </div>
</template>
