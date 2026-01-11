<script setup>
//import { useRoute } from 'vue-router'
//const route = useRoute()
//or
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <!-- <h1>Задача {{ route.params.id }}</h1>
    <p>Детали задачи #{{ route.params.id }}</p> -->

    <h1>Задача {{ id }}</h1>
    <p>Детали задачи #{{ id }}</p>
  </div>
</template>
