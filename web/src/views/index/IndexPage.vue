<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>欢迎使用 Vue + NestJS 全栈项目</h1>
    <p class="desc">这是一个基于 Vue 3 + NestJS + MySQL 的启动模板</p>
    <div class="links">
      <RouterLink to="/test" class="btn">前往 API 测试页面</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.desc {
  color: #666;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #4f46e5;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}

.btn:hover {
  background: #4338ca;
}
</style>
