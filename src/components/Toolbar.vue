<template>
  <div class="toolbar-wrapper">
    <div class="actions">
      <button class="button-plain" @click="togglePreview">
        <img class="preview-icon" :src="previewIconUrl" alt="" />
      </button>

      <div class="divider"></div>

      <button class="button-plain" @click="toggleFullscreen">
        <img class="fullscreen-icon" :src="fullscreenIconUrl" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useAppStore } from '../stores'

const fullscreenIconUrl = ref('/src/assets/icons/fullscreen-light.svg')
const previewIconUrl = ref('/src/assets/icons/preview-on-dark.svg')
const appStore = useAppStore()

const updateFullscreenIconUrl = () => {
  if (appStore.theme === 'dark') {
    if (appStore.fullScreen) {
      fullscreenIconUrl.value = '/src/assets/icons/exit-fullscreen-dark.svg'
    } else {
      fullscreenIconUrl.value = '/src/assets/icons/fullscreen-dark.svg'
    }
  } else {
    if (appStore.fullScreen) {
      fullscreenIconUrl.value = '/src/assets/icons/exit-fullscreen-light.svg'
    } else {
      fullscreenIconUrl.value = '/src/assets/icons/fullscreen-light.svg'
    }
  }
}

const updatePreviewIconUrl = () => {
  if (appStore.theme === 'dark') {
    if (appStore.previewMarkdown) {
      previewIconUrl.value = '/src/assets/icons/preview-on-dark.svg'
    } else {
      previewIconUrl.value = '/src/assets/icons/preview-off-dark.svg'
    }
  } else {
    if (appStore.previewMarkdown) {
      previewIconUrl.value = '/src/assets/icons/preview-on-light.svg'
    } else {
      previewIconUrl.value = '/src/assets/icons/preview-off-light.svg'
    }
  }
}

const updateIconUrls = () => {
  updateFullscreenIconUrl()
  updatePreviewIconUrl()
}

const toggleFullscreen = () => {
  appStore.fullScreen = !appStore.fullScreen
}

const togglePreview = () => {
  appStore.previewMarkdown = !appStore.previewMarkdown
}

watchEffect(() => {
  updateIconUrls()
})
</script>

<style scoped lang="scss">
.toolbar-wrapper {
  display: flex;
  justify-content: flex-end;

  .actions {
    display: flex;
    padding: 4px;
    border: 1px solid var(--button-border);
    border-radius: 4px;
    transition: border ease 0.5s;

    .button-plain {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;

      .preview-icon {
        width: 20px;
        height: 20px;
      }

      .fullscreen-icon {
        width: 20px;
        height: 20px;
      }
    }

    .divider {
      margin: 0 4px;
      width: 2px;
      background-color: var(--button-border);
      transition: background-color ease 0.5s;
    }
  }
}
</style>
