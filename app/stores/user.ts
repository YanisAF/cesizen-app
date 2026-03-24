import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../types'
import { userApi } from '../services/api'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', () => {
  const profile = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProfile(id: number): Promise<void> {
    loading.value = true
    error.value = null
    try {
      const data = await userApi.getProfile(id)
      profile.value = data
      useAuthStore().setUser(data)
    } catch (e: any) {
      error.value = e.message ?? 'Impossible de charger le profil'
    } finally {
      loading.value = false
    }
  }

  async function deleteAccount(id: number): Promise<void> {
    loading.value = true
    error.value = null
    try {
      await userApi.delete(id)
      useAuthStore().logout()
      profile.value = null
    } catch (e: any) {
      error.value = e.message ?? 'Impossible de supprimer le compte'
      throw e
    } finally {
      loading.value = false
    }
  }

  async function deactivateAccount(id: number): Promise<void> {
    loading.value = true
    error.value = null
    try {
      await userApi.deactivate(id)
      useAuthStore().logout()
      profile.value = null
    } catch (e: any) {
      error.value = e.message ?? 'Impossible de désactiver le compte'
      throw e
    } finally {
      loading.value = false
    }
  }

  function clearError() { error.value = null }

  return { profile, loading, error, fetchProfile, deleteAccount, deactivateAccount, clearError }
})
