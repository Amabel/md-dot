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

      <a class="button-plain btn-github" href="https://github.com/Amabel/md-dot" target="_blank">
        <svg class="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77">
          <path
            class="cls-1"
            d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
          />
        </svg>
      </a>
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

    .btn-github {
      margin-left: 16px;

      .github {
        width: 20px;
        height: 20px;

        .cls-1 {
          fill: var(--text-normal);
        }
      }
    }
  }
}
</style>
