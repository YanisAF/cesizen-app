import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../types'
import { userApi } from '../services/api'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', () => {
  const profile = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const saving = ref(false)
  const authStore = useAuthStore() as ReturnType<typeof useAuthStore>
  
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
  
  async function updateProfile(id: number, payload: Partial<User>) {
    saving.value = true
    error.value = null
    try {
      const updated = await userApi.update(id, payload)
      authStore.setUser(updated)
      return updated
    } catch (err: any) {
      error.value = err?.message ?? 'Une erreur est survenue lors de la mise à jour.'
      throw err
    } finally {
      saving.value = false
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
  
  return { profile, loading, error, fetchProfile, deleteAccount, deactivateAccount, clearError, updateProfile, saving }
})
