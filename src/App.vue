<template>
  <div class="body" :class="{ dark: theme === 'dark' }">
    <div class="nav">
      <TopNav />
    </div>
    <div class="content">
      <div class="toolbar-container">
        <Toolbar />
      </div>

      <div class="editor-container">
        <Editor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNav from './components/TopNav.vue'
import Editor from './components/Editor.vue'
import Toolbar from './components/Toolbar.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from './stores'

const appStore = useAppStore()
const { theme } = storeToRefs(appStore)
</script>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: var(--text-normal);
  background-color: var(--bg);
  transition: color 0.5s, background-color 0.5s;

  .nav {
    height: 54px;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 24px 20px 16px 12px;
    overflow: hidden;

    .toolbar-container {
      margin-bottom: 4px;
    }

    .editor-container {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>
