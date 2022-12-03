<template>
  <div class="wrapper">
    <div class="left">
      <div class="logo">Type Anything</div>
    </div>

    <div class="right">
      <button class="btn-theme-toggle" @click="toggleTheme">
        <img
          class="theme-toggle-icon"
          :src="
            theme === 'dark' ? '/src/assets/icons/theme-toggle-dark.svg' : '/src/assets/icons/theme-toggle-light.svg'
          "
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { watchEffect } from 'vue'
import { useAppStore } from '../stores'

const appStore = useAppStore()
const { theme } = storeToRefs(appStore)

const toggleHtmlClass = () => {
  if (theme.value === 'dark') {
    document.querySelector('html')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
  }
}

const toggleTheme = () => {
  appStore.theme = theme.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
  toggleHtmlClass()
})
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  width: 100vw;
  height: 100%;
  border-bottom: 1px solid var(--border);
  transition: border ease 0.5s;

  .right {
    display: flex;
    align-items: center;

    .btn-theme-toggle {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      background-color: transparent;
      border-width: 0;
      cursor: pointer;

      .theme-toggle-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
