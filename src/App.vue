<template>
  <div class="body" :class="{ dark: theme === 'dark' }">
    <TopNav />
    <Editor />

    <button @click="toggle">123123</button>
  </div>
</template>

<script setup lang="ts">
import TopNav from './components/TopNav.vue'
import Editor from './components/Editor.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from './stores'

const appStore = useAppStore()
const { theme } = storeToRefs(appStore)

const toggle = () => {
  appStore.theme = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
.body {
  height: 100vh;
  color: var(--text-normal);
  background-color: var(--top-nav-bg);
  transition: color 0.5s, background-color 0.5s;
}
</style>
