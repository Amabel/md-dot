<template>
  <div class="body" :class="{ dark: theme === 'dark' }">
    <div class="nav">
      <TopNav />
    </div>
    <div class="content">
      <Editor />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNav from './components/TopNav.vue'
import Editor from './components/Editor.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from './stores'

const appStore = useAppStore()
const { theme } = storeToRefs(appStore)
</script>

<style scoped lang="scss">
.body {
  height: 100vh;
  color: var(--text-normal);
  background-color: var(--bg);
  transition: color 0.5s, background-color 0.5s;

  .nav {
    height: 54px;
  }

  .content {
    height: calc(100% - 54px);
  }
}
</style>
