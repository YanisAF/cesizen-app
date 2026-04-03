import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, LoginRequest, RegisterRequest, JwtResponse, JwtResponseLogin } from '../types'
import { authApi, setTokenGetter } from '../services/api'

// Stockage secure key (NativeScript ApplicationSettings)
const TOKEN_KEY = 'cesizen_jwt'
const USER_KEY = 'cesizen_user'

function persistToken(token: string | null) {
  try {
    const { ApplicationSettings } = require('@nativescript/core')
    if (token) ApplicationSettings.setString(TOKEN_KEY, token)
    else ApplicationSettings.remove(TOKEN_KEY)
  } catch (_) { /* test environment */ }
}

function loadToken(): string | null {
  try {
    const { ApplicationSettings } = require('@nativescript/core')
    return ApplicationSettings.getString(TOKEN_KEY) ?? null
  } catch (_) { return null }
}

function persistUser(user: User | null) {
  try {
    const { ApplicationSettings } = require('@nativescript/core')
    if (user) ApplicationSettings.setString(USER_KEY, JSON.stringify(user))
    else ApplicationSettings.remove(USER_KEY)
  } catch (_) { /* test environment */ }
}

function loadUser(): User | null {
  try {
    const { ApplicationSettings } = require('@nativescript/core')
    const raw = ApplicationSettings.getString(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (_) { return null }
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(loadToken())
  const user = ref<User | null>(loadUser())
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'ROLE_ADMIN')

  // Injection of getter token in HTTP client
  setTokenGetter(() => token.value)

  async function login(credentials: LoginRequest): Promise<void> {
  loading.value = true
  error.value = null
  try {
    const res: JwtResponseLogin = await authApi.login(credentials)
    token.value = res.token
    persistToken(res.token)
    user.value = res.user
    persistUser(res.user)
  } catch (e: any) {
    error.value = e.message ?? 'Erreur de connexion'
    throw e
  } finally {
    loading.value = false
  }
}

  async function register(data: RegisterRequest): Promise<void> {
    loading.value = true
    error.value = null
    try {
      const res: JwtResponseLogin = await authApi.register(data)
      token.value = res.token
      persistToken(res.token)
    } catch (e: any) {
      error.value = e.message ?? 'Erreur lors de la création du compte'
      throw e
    } finally {
      loading.value = false
    }
  }

  function setUser(u: User) {
    user.value = u
    persistUser(u)
  }

  function logout() {
    token.value = null
    user.value = null
    persistToken(null)
    persistUser(null)
  }

  function clearError() {
    error.value = null
  }

  return {
    token, user, loading, error,
    isAuthenticated, isAdmin,
    login, register, setUser, logout, clearError
  }
})
