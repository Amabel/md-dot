<template>
  <div class="editor-wrapper" :class="{ 'full-screen': fullScreen }">
    <textarea
      class="textarea"
      :class="{ 'full-screen': fullScreen }"
      name="textarea"
      id=""
      v-model="markdown"
    ></textarea>
    <VueShowdown
      v-if="previewMarkdown"
      class="markdown-body"
      :class="{ 'full-screen': fullScreen }"
      :markdown="markdown"
      flavor="github"
      :options="{ emoji: true }"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { VueShowdown } from 'vue-showdown'
import { useAppStore, useMarkdownStore } from '../stores'

const markdownStore = useMarkdownStore()
const { markdown } = storeToRefs(markdownStore)

const appStore = useAppStore()
const { previewMarkdown, fullScreen } = storeToRefs(appStore)
</script>

<style scoped lang="scss">
.editor-wrapper {
  display: flex;
  height: 100%;
  padding: 8px;

  &.full-screen {
    padding: 0;
  }

  .textarea {
    flex: 1;
    padding: 8px 12px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid var(--border);
    background-color: var(--textarea-bg);
    color: inherit;
    resize: none;
    outline: none;
    transition: border-color 0.5s, background-color 0.5s, box-shadow 0.5s;

    &:focus {
      background-color: var(--bg);
      box-shadow: 0 0 5px 2px var(--accent);
    }

    &.full-screen {
      border: 0;
      border-radius: 0;

      &:focus {
        box-shadow: none;
      }
    }
  }

  .markdown-body {
    margin-left: 24px;
    padding: 8px 12px;
    width: 48%;
    height: 100%;
    overflow-y: auto;
    border-radius: 4px;
    border: 1px solid var(--border);
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;

    &.full-screen {
      margin-left: 0;
      border-radius: 0;
      border: 0;
      border-left: 1px solid var(--border);
    }
  }
}
</style>
