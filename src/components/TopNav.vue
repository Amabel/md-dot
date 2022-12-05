<template>
  <div class="wrapper">
    <div class="left">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="logo-text">md.</div>
    </div>

    <div class="right">
      <button class="button-plain" @click="toggleTheme">
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

  .left {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      width: 32px;
      height: 100%;
    }

    img {
      width: 100%;
      height: auto;
    }

    .logo-text {
      margin-left: 16px;
      font-size: 20px;
      font-family: 'Permanent Marker';
      font-size: 28px;
    }
  }

  .right {
    display: flex;
    align-items: center;

    .button-plain {
      .theme-toggle-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
