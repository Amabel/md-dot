<template>
  <div class="wrapper">
    <div class="left">
      <div class="logo">Type Anything</div>
    </div>

    <div class="right">
      <button class="btn-theme-toggle">
        <img
          class="theme-toggle-icon"
          :src="
            theme === 'dark' ? '/src/assets/icons/theme-toggle-dark.svg' : '/src/assets/icons/theme-toggle-light.svg'
          "
          alt=""
          @click="toggleTheme"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '../stores'

const appStore = useAppStore()
const { theme } = storeToRefs(appStore)

const toggleTheme = () => {
  appStore.theme = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  width: 100vw;
  border-bottom: 1px solid var(--border);
  transition: border ease 0.5s;

  .right {
    display: flex;
    align-items: center;

    .btn-theme-toggle {
      margin: 0;
      padding: 0;
      background-color: transparent;
      border-width: 0;

      .theme-toggle-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
