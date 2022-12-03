import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: useStorage('theme', 'light' as Theme),
  }),
})

type Theme = 'dark' | 'light'
