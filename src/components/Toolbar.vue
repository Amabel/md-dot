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

const FULLSCREEN_LIGHT_URL = '/src/assets/icons/fullscreen-light.svg'
const FULLSCREEN_DARK_URL = '/src/assets/icons/fullscreen-dark.svg'
const EXIT_FULLSCREEN_LIGHT_URL = '/src/assets/icons/exit-fullscreen-light.svg'
const EXIT_FULLSCREEN_DARK_URL = '/src/assets/icons/exit-fullscreen-dark.svg'

const PREVIEW_ON_LIGHT_URL = '/src/assets/icons/preview-on-light.svg'
const PREVIEW_ON_DARK_URL = '/src/assets/icons/preview-on-dark.svg'
const PREVIEW_OFF_LIGHT_URL = '/src/assets/icons/preview-off-light.svg'
const PREVIEW_OFF_DARK_URL = '/src/assets/icons/preview-off-dark.svg'

const fullscreenIconUrl = ref(FULLSCREEN_LIGHT_URL)
const previewIconUrl = ref(PREVIEW_ON_LIGHT_URL)
const appStore = useAppStore()

const updateFullscreenIconUrl = () => {
  if (appStore.theme === 'dark') {
    fullscreenIconUrl.value = appStore.fullScreen ? EXIT_FULLSCREEN_DARK_URL : FULLSCREEN_DARK_URL
  } else {
    fullscreenIconUrl.value = appStore.fullScreen ? EXIT_FULLSCREEN_LIGHT_URL : FULLSCREEN_LIGHT_URL
  }
}

const updatePreviewIconUrl = () => {
  if (appStore.theme === 'dark') {
    previewIconUrl.value = appStore.previewMarkdown ? PREVIEW_ON_DARK_URL : PREVIEW_OFF_DARK_URL
  } else {
    previewIconUrl.value = appStore.previewMarkdown ? PREVIEW_ON_LIGHT_URL : PREVIEW_OFF_LIGHT_URL
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
    border: 1px solid var(--border);
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
      width: 1px;
      background-color: var(--border);
      transition: background-color ease 0.5s;
    }
  }
}
</style>
