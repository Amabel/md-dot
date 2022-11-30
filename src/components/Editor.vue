<template>
  <div>Editor</div>
  <textarea name="textarea" id="" cols="30" rows="10"></textarea>
  <VueShowdown markdown="## markdown text" flavor="github" :options="{ emoji: true }" />
</template>

<script setup lang="ts">
import { VueShowdown } from 'vue-showdown'
</script>

<style scoped></style>
