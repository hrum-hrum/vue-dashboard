<script setup>
import { login } from '@/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

// const { login } = useAppAuth()
const onUserLogin = () => {
  login()
  //alert(isLoggedIn.value)
  router.push('/dashboard')
}
</script>
<template>
  <div class="login">
    <h1>Вход</h1>
    <!-- <a href="./dashboard.html">На главную</a> -->
    <!-- <button @click="onHomeLinkClick">На главную</button> -->
    <!-- <div v-if="isLoggedIn">Вы авторизованы как пользователь</div> -->
    <button @click="onUserLogin" class="btn-login">Войти как пользователь</button>
  </div>
</template>
