<script setup lang="ts">
import { ref } from 'vue'

const API_BASE = 'http://localhost:3000'

const helloMessage = ref('')
const loadingHello = ref(false)

const inputId = ref<number | ''>('')
const itemResult = ref<{ id: number; name: string; description: string } | { message: string } | null>(null)
const loadingItem = ref(false)

async function fetchHello() {
  loadingHello.value = true
  try {
    const res = await fetch(`${API_BASE}/test`)
    helloMessage.value = await res.text()
  } catch {
    helloMessage.value = '请求失败，请确保后端已启动'
  } finally {
    loadingHello.value = false
  }
}

async function fetchById() {
  if (inputId.value === '') return
  loadingItem.value = true
  itemResult.value = null
  try {
    const res = await fetch(`${API_BASE}/test/${inputId.value}`)
    itemResult.value = await res.json()
  } catch {
    itemResult.value = { message: '请求失败，请确保后端已启动' }
  } finally {
    loadingItem.value = false
  }
}
</script>

<template>
  <div class="test-page">
    <h1>API 测试页面</h1>
    <p class="subtitle">通过此页面测试后端的 TestModule API</p>

    <div class="card">
      <h2>GET /test — Hello World</h2>
      <p class="desc">请求后端根路径，返回 "Hello World" 字符串</p>
      <button :disabled="loadingHello" @click="fetchHello">
        {{ loadingHello ? '请求中...' : '发送请求' }}
      </button>
      <div v-if="helloMessage" class="result">{{ helloMessage }}</div>
    </div>

    <div class="card">
      <h2>GET /test/:id — 按 ID 查询</h2>
      <p class="desc">携带 ID 参数请求，返回对应的模拟数据对象</p>
      <div class="input-row">
        <input
          v-model.number="inputId"
          type="number"
          placeholder="输入 ID (1-3)"
          min="1"
          max="3"
        />
        <button :disabled="loadingItem || inputId === ''" @click="fetchById">
          {{ loadingItem ? '请求中...' : '发送请求' }}
        </button>
      </div>
      <div v-if="itemResult" class="result">
        <pre>{{ JSON.stringify(itemResult, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-page {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
}

h1 {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.card h2 {
  font-size: 1.1rem;
  margin: 0 0 0.25rem;
}

.desc {
  font-size: 0.875rem;
  color: #888;
  margin: 0 0 1rem;
}

.input-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
}

button {
  padding: 0.5rem 1.25rem;
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover:not(:disabled) {
  background: #4338ca;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.result {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
