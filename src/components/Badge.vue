<template>
  <div
    class="badge-wrapper"
    v-tippy="{
      content: 'Data will be saved to local storage.',
      trigger: 'click',
      placement: 'right',
    }"
  >
    <img class="icon" :style="iconFilter" src="/src/assets/icons/client.svg" alt="" />
    <div>Client Mode</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useAppStore } from '../stores'

const appStore = useAppStore()
const { theme } = storeToRefs(appStore)

const iconFilter = computed<{}>(() => {
  switch (theme.value) {
    case 'light':
      return {
        '--icon-filter': 'invert(23%) sepia(13%) saturate(1301%) hue-rotate(169deg) brightness(91%) contrast(93%)',
      }
    case 'dark':
    default:
      return {
        '--icon-filter': 'invert(76%) sepia(14%) saturate(263%) hue-rotate(169deg) brightness(97%) contrast(85%)',
      }
  }
})
</script>

<style scoped lang="scss">
.badge-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 14px;
  cursor: help;
  transition: border-color 0.5s;

  .icon {
    margin-right: 4px;
    width: 16px;
    height: 16px;
    filter: var(--icon-filter);
    transition: filter 0.5s;

    &::selection {
      color: inherit;
    }
  }
}
</style>
