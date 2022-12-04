import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

type Theme = 'dark' | 'light'

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: useStorage('theme', 'light' as Theme),
  }),
})
