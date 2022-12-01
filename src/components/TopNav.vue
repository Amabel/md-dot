<template>
  <div class="wrapper w-full h-12">
    <div class="left">
      <div class="logo">Type Anything</div>
    </div>

    <div class="right">
      <button>
        <img
          class="theme-toggle"
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
  border-bottom: 1px solid var(--border);
  transition: border ease 0.3s;

  .right {
    display: flex;
    align-items: center;

    .theme-toggle {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
