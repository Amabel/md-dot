import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

type Theme = 'dark' | 'light'

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: useStorage('theme', 'light' as Theme),
    fullScreen: useStorage('fullScreen', false),
    previewMarkdown: useStorage('previewMarkdown', true),
  }),
})
