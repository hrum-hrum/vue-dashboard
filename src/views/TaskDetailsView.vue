<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h1>Задача {{ route.params.id }}</h1>
    <p>Детали задачи #{{ route.params.id }}</p>
  </div>
</template>
