<template>
  <div class="wrapper flex flex-row">
    <textarea class="textarea" name="textarea" id="" v-model="text"></textarea>
    <VueShowdown class="markdown-body" :markdown="text" flavor="github" :options="{ emoji: true }" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueShowdown } from 'vue-showdown'

const text = ref('123')
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  padding: 24px 20px;
  height: 100%;
  width: 100vw;

  .textarea {
    flex: 1;
    margin-right: 24px;
    padding: 8px 12px;
    min-width: 45%;
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
    overflow-y: scroll;
    border-radius: 4px;
    border: 1px solid var(--border);
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  }
}
</style>
