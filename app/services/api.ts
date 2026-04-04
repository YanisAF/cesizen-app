import type {
  LoginRequest, RegisterRequest, JwtResponse,
  User, ResetRequest, VerifyPinRequest, ResetPasswordRequest,
  Category, Page, Quiz, QuizSubmissionDto, ApiError,
  ResultDtoResponse,
  JwtResponseLogin,
  DeactivateResponseDto,
} from '../types'

// ============================================================
// Configuration — pointe vers le backend Spring Boot
// ============================================================
const BASE_URL = 'http://10.0.2.2:8080/api/v1'

class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'HttpError'
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  withAuth = true,
  timeout?: number
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {})
  }
  
  if (withAuth) {
    // Récupération du token depuis le store Pinia (hors setup : accès direct)
    const token = _getToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }
  
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers
  })
  
  if (!res.ok) {
     if (res.status === 401) {
      _onUnauthorized()
      throw new HttpError(401, 'Session expirée, veuillez vous reconnecter')
    }
    let msg = `Erreur ${res.status}`
    try {
      const err: ApiError = await res.json()
      msg = err.message ?? msg
    } catch (_) { /* keep default */ }
    throw new HttpError(res.status, msg)
  }
  
  // 204 No Content
  if (res.status === 204) return undefined as unknown as T
  
  const text = await res.text()
  if (!text) return undefined as unknown as T
  return JSON.parse(text) as T
}

// Accès au token sans import circulaire
let _getToken: () => string | null = () => null
export function setTokenGetter(fn: () => string | null) {
  _getToken = fn
}

// Handler pour les 401, à configurer depuis le store Pinia pour déconnexion automatique
let _onUnauthorized: () => void = () => {}
export function setUnauthorizedHandler(fn: () => void) {
  _onUnauthorized = fn
}

// ============================================================
// Auth — /api/v1/auth
// ============================================================
export const authApi = {
  login: (data: LoginRequest) =>
    request<JwtResponseLogin>('/auth/login', { method: 'POST', body: JSON.stringify(data) }, false),
  
  register: (data: RegisterRequest) =>
    request<JwtResponseLogin>('/auth/register', { method: 'POST', body: JSON.stringify(data) }, false),
  
  checkBackend: () =>
    request<void>('/auth/backend-up', { method: 'GET' }, false)
}

// ============================================================
// User — /api/v1/users
// ============================================================
export const userApi = {
  getProfile: (id: number) =>
    request<User>(`/users/profil?id=${id}`),
  
  update: (id: number, data: Partial<User>) =>
    request<User>(`/users/update-profil?id=${id}`, { method: 'PATCH', body: JSON.stringify(data) }, true, 10000),

  deactivate: (id: number) =>
  request<DeactivateResponseDto>(`/auth/deactivate?id=${id}`, { method: 'PATCH' }),
  
  delete: (id: number) =>
    request<void>(`/users/delete?id=${id}`, { method: 'DELETE' })
}

// ============================================================
// Reset password — /api/v1/
// ============================================================
export const resetApi = {
  requestReset: (data: ResetRequest) =>
    request<void>('/request-password', { method: 'POST', body: JSON.stringify(data) }, false),
  
  verifyPin: (data: VerifyPinRequest) =>
    request<JwtResponse>('/verify-pin', { method: 'POST', body: JSON.stringify(data) }, false),
  
  resetPassword: (data: ResetPasswordRequest) =>
    request<void>('/reset-password', { method: 'POST', body: JSON.stringify(data) }, false)
}

// ============================================================
// Pages — /api/v1/page
// ============================================================
export const pageApi = {
  getAll: () =>
    request<Page[]>('/page/get-all-pages', {}, false),
  
  getById: (id: number) =>
    request<Page>(`/page/get-page?id=${id}`, {}, false),
  
  search: (query: string) =>
    request<Page[]>(`/page/get-all-pages?search=${encodeURIComponent(query)}`, {}, false)
}

// ============================================================
// Categories — /api/v1/categories
// ============================================================
export const categoryApi = {
  getAll: () =>
    request<Category[]>('/categories/list', {}, false)
}

// ============================================================
// Quiz — /api/v1/
// ============================================================
export const quizApi = {
  getAll: () =>
    request<Quiz[]>('/quiz-list', {}, false),
  
  getById: (id: number) =>
    request<Quiz>(`/get-quiz-by-id?id=${id}`, {}, false),
  
  getQuestions: (quizId: number) =>
    request<Quiz['questionList']>(`/get-all-questions?quizId=${quizId}`, {}, false)
}

// ============================================================
// Quiz Submission — /api/v1/submit
// POST en tant qu'utilisateur connecté pour sauvegarde
// POST sans auth pour visiteur (résultat non persisté côté backend)
// ============================================================
export const submissionApi = {
  submit: (quizId: number, submission: QuizSubmissionDto) =>
    request<ResultDtoResponse>(
    `/submit?quizId=${quizId}`,
    { method: 'POST', body: JSON.stringify(submission) }),
    
  save: (quizId: number, submission: QuizSubmissionDto) =>
    request<ResultDtoResponse>(
    `/save-result?quizId=${quizId}`,
    { method: 'POST', body: JSON.stringify(submission) }
    )
  }
  
  // ============================================================
  // Diagnosis Results — /api/v1/results (USER_PROFIL)
  // ============================================================
  export const resultApi = {
    getByUser: (userId: number) =>
      request<ResultDtoResponse[]>(`/get-history-quiz?userId=${userId}`)
  }
