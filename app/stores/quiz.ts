import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Quiz, ResultDtoResponse, QuizSubmissionDto } from '../types'
import { quizApi, submissionApi, resultApi } from '../services/api'

export const useQuizStore = defineStore('quiz', () => {
  const quizList = ref<Quiz[]>([])
  const currentQuiz = ref<Quiz | null>(null)
  const currentResult = ref<ResultDtoResponse | null>(null)
  const history = ref<ResultDtoResponse[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  // Réponses en cours de saisie { questionId -> Boolean }
  const answers = ref<Record<number, boolean>>({})
  
  async function fetchAll(): Promise<void> {
    loading.value = true
    error.value = null
    try {
      quizList.value = await quizApi.getAll()
    } catch (e: any) {
      error.value = e.message ?? 'Impossible de charger les quiz'
    } finally {
      loading.value = false
    }
  }
  
  async function fetchById(id: number): Promise<void> {
    loading.value = true
    error.value = null
    answers.value = {}
    try {
      currentQuiz.value = await quizApi.getById(id)
    } catch (e: any) {
      error.value = e.message ?? 'Quiz introuvable'
    } finally {
      loading.value = false
    }
  }
  
  function setAnswer(questionId: number, value: boolean): void {
    answers.value = { ...answers.value, [questionId]: value }
  }
  
  function isComplete(): boolean {
    if (!currentQuiz.value) return false
    return currentQuiz.value.questionList.every(
      q => answers.value[q.id] !== undefined
    )
  }
  
  /**
  * Soumission du quiz.
  * - Visiteur : calcul côté serveur mais résultat non persisté (pas de Bearer)
  * - Utilisateur connecté : résultat persisté via le backend
  */
  
  async function submitQuiz(): Promise<ResultDtoResponse | null> {
  if (!currentQuiz.value) {
    error.value = 'Aucun quiz sélectionné'
    return null
  }

  if (!isComplete()) {
    error.value = 'Veuillez répondre à toutes les questions'
    return null
  }

  loading.value = true
  error.value = null

  try {
    const submission: QuizSubmissionDto = {
      quizId: currentQuiz.value.id,
      answers: answers.value
    }

    const result = await submissionApi.submit(currentQuiz.value.id, submission)
    currentResult.value = result
    return result // On retourne ici le résultat pour le récupérer dans le composant
  } catch (e: any) {
    error.value = e.message ?? 'Erreur lors de la soumission du quiz'
    return null
  } finally {
    loading.value = false
  }
}
  
  async function fetchHistory(userId: number): Promise<void> {
    loading.value = true
    error.value = null
    try {
      history.value = await resultApi.getByUser(userId)
    } catch (e: any) {
      error.value = e.message ?? 'Impossible de charger l\'historique'
    } finally {
      loading.value = false
    }
  }
  
  function searchQuiz(query: string): Quiz[] {
    const q = query.toLowerCase().trim()
    if (!q) return quizList.value
    return quizList.value.filter(quiz =>
      quiz.title.toLowerCase().includes(q) ||
      quiz.description.toLowerCase().includes(q)
    )
  }
  
  function resetAnswers(): void {
    answers.value = {}
    currentResult.value = null
  }
  
  function clearError() { error.value = null }
  
  return {
    quizList, currentQuiz, currentResult, history, loading, error, answers,
    fetchAll, fetchById, setAnswer, isComplete, submitQuiz,
    fetchHistory, searchQuiz, resetAnswers, clearError
  }
})
