<template>
  <div class="editor-wrapper">
    <textarea class="textarea" name="textarea" id="" v-model="markdown"></textarea>
    <VueShowdown class="markdown-body" :markdown="markdown" flavor="github" :options="{ emoji: true }" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { VueShowdown } from 'vue-showdown'
import { useMarkdownStore } from '../stores'

const markdownStore = useMarkdownStore()
const { markdown } = storeToRefs(markdownStore)
</script>

<style scoped lang="scss">
.editor-wrapper {
  display: flex;
  height: 100%;
  padding: 8px 0 8px 8px;

  .textarea {
    flex: 1;
    margin-right: 24px;
    padding: 8px 12px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid var(--border);
    background-color: var(--textarea-bg);
    color: inherit;
    resize: none;
    outline: none;
    transition: border-color 0.5s, background-color 0.5s;

    &:focus {
      background-color: var(--bg);
      box-shadow: 0 0 5px 2px var(--accent);
    }
  }

  .markdown-body {
    padding: 8px 12px;
    width: 48%;
    height: 100%;
    overflow-y: auto;
    border-radius: 4px;
    border: 1px solid var(--border);
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  }
}
</style>
