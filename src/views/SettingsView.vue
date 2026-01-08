<template>
  <div>
    <h1>Настройки</h1>
    <div class="settings-tabs">
      <!-- <a href="../settings/profile.html" class="settings-tab router-link--active"> Профиль </a> -->
      <RouterLink to="profile" class="settings-tab"> Профиль </RouterLink>
      <!-- <a href="../settings/security.html" class="settings-tab">Безопасность</a> -->
      <RouterLink to="security" class="settings-tab"> Безопасность </RouterLink>
    </div>
    <RouterView />
  </div>
</template>
