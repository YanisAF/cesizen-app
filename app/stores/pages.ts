import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Page, Category } from '../types'
import { pageApi, categoryApi } from '../services/api'

export const usePageStore = defineStore('page', () => {
  const pages = ref<Page[]>([])
  const categories = ref<Category[]>([])
  const currentPage = ref<Page | null>(null)
  const savedPages = ref<number[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchAll(): Promise<void> {
    loading.value = true
    error.value = null
    try {
      pages.value = await pageApi.getAll()
    } catch (e: any) {
      error.value = e.message ?? 'Impossible de charger les ressources'
    } finally {
      loading.value = false
    }
  }

  async function fetchById(id: number): Promise<void> {
    loading.value = true
    error.value = null
    try {
      currentPage.value = await pageApi.getById(id)
    } catch (e: any) {
      error.value = e.message ?? 'Ressource introuvable'
    } finally {
      loading.value = false
    }
  }

  async function fetchCategories(): Promise<void> {
    try {
      categories.value = await categoryApi.getAll()
    } catch (e: any) {
      error.value = e.message ?? 'Impossible de charger les catégories'
    }
  }

  function search(query: string): Page[] {
    const q = query.toLowerCase().trim()
    if (!q) return pages.value
    return pages.value.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.category.name.toLowerCase().includes(q)
    )
  }

  function filterByCategory(categoryId: number): Page[] {
    return pages.value.filter(p => p.category.id === categoryId)
  }

  function toggleSave(pageId: number): void {
    const idx = savedPages.value.indexOf(pageId)
    if (idx === -1) savedPages.value.push(pageId)
    else savedPages.value.splice(idx, 1)
    // Persistance locale (optionnel)
    try {
      const { ApplicationSettings } = require('@nativescript/core')
      ApplicationSettings.setString('cesizen_saved_pages', JSON.stringify(savedPages.value))
    } catch (_) { /* test env */ }
  }

  function isSaved(pageId: number): boolean {
    return savedPages.value.includes(pageId)
  }

  function loadSavedPages(): void {
    try {
      const { ApplicationSettings } = require('@nativescript/core')
      const raw = ApplicationSettings.getString('cesizen_saved_pages')
      if (raw) savedPages.value = JSON.parse(raw)
    } catch (_) { /* test env */ }
  }

  function clearError() { error.value = null }

  return {
    pages, categories, currentPage, savedPages, loading, error,
    fetchAll, fetchById, fetchCategories,
    search, filterByCategory, toggleSave, isSaved, loadSavedPages,
    clearError
  }
})
