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
  margin-top: 24px;
  padding: 0 20px;
  height: 85%;
  width: 100vw;

  .textarea {
    border: 1px solid #ccc;
    resize: none;
  }
}
</style>
