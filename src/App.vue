<template>
  <div class="body">
    <div class="nav" :class="{ 'full-screen': fullScreen }">
      <TopNav />
    </div>
    <div class="content" :class="{ 'full-screen': fullScreen }">
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
import { useMagicKeys, whenever } from '@vueuse/core'

const appStore = useAppStore()
const { previewMarkdown, fullScreen } = storeToRefs(appStore)
const { current } = useMagicKeys()

const shiftCtrlPIsPressed = () => current.has('shift') && current.has('control') && current.has('k')
const shiftCtrlFIsPressed = () => current.has('shift') && current.has('control') && current.has('l')
const ecsIsPressed = () => current.has('escape')
const togglePreviewMarkdown = () => (previewMarkdown.value = !previewMarkdown.value)
const toggleFullscreen = () => (fullScreen.value = !fullScreen.value)

// NOTE: There is a bug with Meta(Cmd) key detection, thus use control for both Mac and Windows OS.
// See https://github.com/vueuse/vueuse/issues/2298
whenever(
  () => shiftCtrlPIsPressed() || shiftCtrlFIsPressed() || ecsIsPressed(),
  () => {
    if (shiftCtrlPIsPressed()) {
      togglePreviewMarkdown()
    }

    if (shiftCtrlFIsPressed()) {
      toggleFullscreen()
    }

    if (ecsIsPressed()) {
      if (fullScreen.value) {
        toggleFullscreen()
      }
    }
  },
)
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

    &.full-screen {
      height: 0;
      overflow: hidden;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 12px;
    overflow: hidden;

    &.full-screen {
      padding: 0;

      .toolbar-container {
        margin-bottom: 0;
        height: 0;
        overflow: hidden;
      }
    }

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
