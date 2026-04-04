import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isDown = ref(false)
  const isReady = ref(false)
  return { isDown, isReady }
})