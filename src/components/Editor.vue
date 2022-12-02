<template>
  <div class="wrapper flex flex-row">
    <textarea class="textarea" name="textarea" id="" cols="30" rows="10"></textarea>
    <VueShowdown
      class="markdown-body"
      markdown="开启下面的 `vueTemplate` Prop，启用 Vue 模板解析！"
      flavor="github"
      :options="{ emoji: true }"
    />
  </div>
</template>

<script setup lang="ts">
import { VueShowdown } from 'vue-showdown'
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  margin-top: 24px;
  padding: 0 20px;
  height: 85%;
  width: 100vw;

  .textarea {
    flex: 1;
    margin-right: 24px;
    padding: 8px 12px;
    min-width: 45%;
    border-radius: 4px;
    border: 1px solid var(--border);
    background-color: var(--textarea-bg);
    resize: none;
    outline: none;
    transition: border-color 0.5s, background-color 0.5s;

    &:focus {
      background-color: var(--bg);
      box-shadow: 0 0 5px 2px var(--accent);
    }
  }
}
</style>
