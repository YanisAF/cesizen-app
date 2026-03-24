import { getCurrentInstance, ref } from 'vue'

const viewMap: Record<string, () => Promise<any>> = {
  Home:             () => import('../views/home/HomeView.vue'),
  Login:            () => import('../views/auth/LoginView.vue'),
  Register:         () => import('../views/auth/RegisterView.vue'),
  ResetRequest:     () => import('../views/auth/ResetRequestView.vue'),
  ResetVerify:      () => import('../views/auth/ResetVerifyView.vue'),
  ResetPassword:    () => import('../views/auth/ResetPasswordView.vue'),
  Profile:          () => import('../views/user/ProfileView.vue'),
  Account:          () => import('../views/user/AccountView.vue'),
  PageList:         () => import('../views/pages/PageListView.vue'),
  PageDetail:       () => import('../views/pages/PageDetailView.vue'),
  Categories:       () => import('../views/pages/CategoriesView.vue'),
  QuizList:         () => import('../views/quiz/QuizListView.vue'),
  QuizDetail:       () => import('../views/quiz/QuizDetailView.vue'),
  QuizResult:       () => import('../views/quiz/QuizResultView.vue'),
  DiagnosisHistory: () => import('../views/quiz/DiagnosisHistoryView.vue'),
  Contact:          () => import('../views/support/ContactView.vue'),
}

// ref globale pour la route actuelle
const currentRoute = ref('Home')

export function useNavigation() {
  const instance = getCurrentInstance()
  const $nav = instance?.appContext?.config?.globalProperties

  async function navigateTo(routeName: string, props: Record<string, any> = {}) {
    const loader = viewMap[routeName]
    if (!loader || !$nav) return
    const module = await loader()

    currentRoute.value = routeName  // <-- mise à jour de la route active

    $nav.$navigateTo(module.default, {
      props,
      transition: { name: 'slide', duration: 200, curve: 'ease' }
    })
  }

  function goBack() {
    $nav?.$navigateBack()
  }

  return { navigateTo, goBack, currentRoute }
}