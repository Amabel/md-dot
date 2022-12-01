import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: 'dark' as 'dark' | 'light',
  }),
})
