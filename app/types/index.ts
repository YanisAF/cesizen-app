// ============================================================
// Types — alignés sur les entités & DTOs Spring Boot
// ============================================================

// --- Auth ---
export interface LoginRequest {
  identifier: string
  password: string
}

export interface RegisterRequest {
  user_name: string
  email: string
  phone?: string
  password: string
}

export interface JwtResponse {
  token: string
}

export interface JwtResponseLogin {
  type: string
  token: string
  user: User
}

export interface ResultDtoResponse {
  id: number
  totalScore: number
  message: string
  riskLevel: string
  quizId: number
  userId?: number
}

// --- User (UserDtoResponse) ---
export type UserRole = 'ROLE_USER' | 'ROLE_ADMIN'

export interface User {
  id: number
  user_name: string
  email: string
  phone?: string
  role: UserRole
  last_activity_at: string
}

// --- Reset password ---
export type ResetChannel = 'email' | 'sms'

export interface ResetRequest {
  identifier: string   // email or phone
  channel: ResetChannel
}

export interface VerifyPinRequest {
  identifier: string
  pin: string
}

export interface ResetPasswordRequest {
  jwt: string
  newPassword: string
  channel: ResetChannel
}

// --- Category (CategoryDtoResponse) ---
export interface Category {
  id: number
  name: string
}

// --- ContentPage (ContentPageDto) ---
export interface ContentPageItem {
  name: string
  description: string
  itemUrl: string
}

// --- Page (PageDtoResponse) ---
export interface Page {
  id: number
  title: string
  content: ContentPageItem[]
  imageUrl?: string
  category: Category
}

// --- Question (QuestionDtoResponse) ---
export interface Question {
  id: number
  statement: string
  scoreValue: number
  correctAnswer: boolean
  quizId?: number
}

// --- Quiz (QuizDtoResponse) ---
export interface Quiz {
  id: number
  title: string
  description: string
  questionList: Question[]
}

// --- QuizSubmission ---
export interface QuizSubmissionDto {
  quizId: number
  answers: Record<number, boolean>  // questionId -> réponse choisie
}

// --- ResultDiagnosis (ResultDtoResponse) ---
export type RiskLevel = 'FAIBLE' | 'MODERE' | 'ELEVE' | 'CRITIQUE'

// --- Erreurs API ---
export interface ApiError {
  status: number
  message: string
  timestamp?: string
}

// --- Pagination ---
export interface PaginatedResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  size: number
  number: number
}

// --- Navigation (NativeScript Vue Router) ---
export type AppRoute =
  | 'Home'
  | 'Login'
  | 'Register'
  | 'Profile'
  | 'PageList'
  | 'PageDetail'
  | 'Categories'
  | 'QuizList'
  | 'QuizDetail'
  | 'QuizResult'
  | 'DiagnosisHistory'
  | 'ResetRequest'
  | 'ResetVerify'
  | 'ResetNewPassword'
  | 'Contact'
  | 'AccountSettings'

  // Dto reçu lors de la désactivation du compte:
export interface DeactivateResponseDto {
  id: number
  message: string
  isActive: boolean
}
