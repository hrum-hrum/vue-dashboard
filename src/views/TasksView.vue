<template>
  <div>
    <h1>Список задач</h1>
    <ul class="task-list">
      <li class="task-item">
        <!-- <a href="./tasks/1.html" class="task-link">Задача 1</a> -->
        <RouterLink to="/tasks/1" class="task-link">Задача 1</RouterLink>
      </li>
      <li class="task-item">
        <!-- <a href="./tasks/2.html" class="task-link">Задача 2</a> -->
        <RouterLink to="/tasks/2" class="task-link">Задача 2</RouterLink>
      </li>
    </ul>

    <RouterView />
  </div>
</template>
