<template>
  <div class="toolbar-wrapper">
    <div class="actions">
      <button
        class="button-plain"
        @click="togglePreview"
        v-tippy="{
          content: 'Toggle Preview <span class=tooltip><kbd>Shift</kbd> <kbd>Ctrl</kbd> + <kbd>K</kbd></span>',
          allowHTML: true,
          delay: [300, null],
          placement: 'bottom',
        }"
      >
        <img class="preview-icon" :src="previewIconUrl" alt="" />
      </button>

      <div v-if="!disableFullscreen" class="divider"></div>

      <button
        v-if="!disableFullscreen"
        class="button-plain"
        @click="toggleFullscreen"
        v-tippy="{
          content: 'Toggle Fullscreen <span class=tooltip><kbd>Shift</kbd> <kbd>Ctrl</kbd> + <kbd>L</kbd></span>',
          allowHTML: true,
          delay: [300, null],
          placement: 'bottom',
        }"
      >
        <img class="fullscreen-icon" :src="fullscreenIconUrl" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useAppStore } from '../stores'
import { isMobileOrTablet } from '../utils/os-utils'

import fullscreenLightImage from '/src/assets/icons/fullscreen-light.svg'
import fullscreenDarkImage from '/src/assets/icons/fullscreen-dark.svg'
import exitFullscreenLightImage from '/src/assets/icons/exit-fullscreen-light.svg'
import exitFullscreenDarkImage from '/src/assets/icons/exit-fullscreen-dark.svg'

import previewOnLightImage from '/src/assets/icons/preview-on-light.svg'
import previewOnDarkImage from '/src/assets/icons/preview-on-dark.svg'
import previewOffLightImage from '/src/assets/icons/preview-off-light.svg'
import previewOffDarkImage from '/src/assets/icons/preview-off-dark.svg'

const fullscreenIconUrl = ref(fullscreenLightImage)
const previewIconUrl = ref(previewOnLightImage)
const appStore = useAppStore()

const updateFullscreenIconUrl = () => {
  if (appStore.theme === 'dark') {
    fullscreenIconUrl.value = appStore.fullScreen ? exitFullscreenDarkImage : fullscreenDarkImage
  } else {
    fullscreenIconUrl.value = appStore.fullScreen ? exitFullscreenLightImage : fullscreenLightImage
  }
}

const updatePreviewIconUrl = () => {
  if (appStore.theme === 'dark') {
    previewIconUrl.value = appStore.previewMarkdown ? previewOnDarkImage : previewOffDarkImage
  } else {
    previewIconUrl.value = appStore.previewMarkdown ? previewOnLightImage : previewOffLightImage
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

const disableFullscreen = computed<boolean>(() => isMobileOrTablet())

watchEffect(() => {
  updateIconUrls()
})
</script>

<style scoped lang="scss">
.toolbar-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;

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
