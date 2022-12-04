import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useMarkdownStore = defineStore('markdown', {
  state: () => ({
    markdown: useStorage('markdown', ''),
  }),
})
