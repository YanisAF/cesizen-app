import { getCurrentInstance, ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const viewMap: Record<string, () => Promise<any>> = {
  Home:             () => import('../views/home/HomeView.vue'),
  Login:            () => import('../views/auth/LoginView.vue'),
  Register:         () => import('../views/auth/RegisterView.vue'),
  ResetRequest:     () => import('../views/auth/ResetRequestView.vue'),
  ResetVerify:      () => import('../views/auth/ResetVerifyView.vue'),
  ResetPassword:    () => import('../views/auth/ResetPasswordView.vue'),
  Profile:          () => import('../views/user/ProfileView.vue'),
  EditProfil:       () => import('../views/user/EditProfilView.vue'),
  Account:          () => import('../views/user/AccountView.vue'),
  PageList:         () => import('../views/pages/PageListView.vue'),
  PageDetail:       () => import('../views/pages/PageDetailView.vue'),
  Categories:       () => import('../views/pages/CategoriesView.vue'),
  QuizList:         () => import('../views/quiz/QuizListView.vue'),
  QuizDetail:       () => import('../views/quiz/QuizDetailView.vue'),
  QuizResult:       () => import('../views/quiz/QuizResultView.vue'),
  DiagnosisHistory: () => import('../views/quiz/DiagnosisHistoryView.vue'),
  Contact:          () => import('../views/support/ContactView.vue'),
  BackendDown:       () => import('../views/BackendDownView.vue'),
}

// Routes qui nécessitent un token valide
const protectedRoutes = new Set([
  'Profile',
  'Account',
  'EditProfil',
  'DiagnosisHistory',
])

const currentRoute = ref('Home')

export function useNavigation() {
  const instance = getCurrentInstance()
  const $nav = instance?.appContext?.config?.globalProperties

  async function navigateTo(routeName: string, props: Record<string, any> = {}) {
    const loader = viewMap[routeName]
    if (!loader || !$nav) return

    // Protection : redirige vers Login si token expiré ou absent
    if (protectedRoutes.has(routeName)) {
      const auth = useAuthStore()
      if (!auth.isAuthenticated) {
        await _navigate($nav, 'Login', {})
        return
      }
    }

    await _navigate($nav, routeName, props)
  }

  function goBack() {
    $nav?.$navigateBack()
  }

  return { navigateTo, goBack, currentRoute }
}

async function _navigate($nav: any, routeName: string, props: Record<string, any>) {
  const loader = viewMap[routeName]
  if (!loader) return
  const module = await loader()
  currentRoute.value = routeName
  $nav.$navigateTo(module.default, {
    props,
    transition: { name: 'slide', duration: 200, curve: 'ease' }
  })
}