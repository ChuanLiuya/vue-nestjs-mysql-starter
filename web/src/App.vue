<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
  console.log(`当前环境: ${import.meta.env.MODE}`)
  console.log(`应用标题: ${import.meta.env.VITE_APP_TITLE}`)
})
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/test">API 测试</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
}

nav {
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  background: #4f46e5;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.15);
}

main {
  padding: 1rem;
}
</style>
