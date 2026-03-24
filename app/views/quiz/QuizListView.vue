<template>
  <Page>
    <!-- AppBar -->
    <ActionBar>
      <AppBar title="Quiz" showBack @back="navigateTo('Home')" />
    </ActionBar>
    
    <DockLayout stretchLastChild="true">
      <!-- Bottom Menu -->
      <BottomMenu dock="bottom" />
      
      <!-- Pagination -->
      <StackLayout
      dock="bottom"
      orientation="horizontal"
      horizontalAlignment="center"
      margin="8"
      spacing="8"
      >
      <Button text="« Prev" :isEnabled="currentPage > 1" @tap="prevPage" />
        <Label :text="`Page ${currentPage} / ${totalPages}`" verticalAlignment="center" />
        <Button text="Next »" :isEnabled="currentPage < totalPages" @tap="nextPage" />
      </StackLayout>
      
      <!-- Contenu principal -->
      <GridLayout rows="auto, *" :style="containerStyle">
        <!-- HEADER (fixe) -->
        <StackLayout row="0" :style="searchBarContainer">
          <SearchBar v-model="searchQuery" hint="Rechercher un quiz…" />
          
          <!-- Page size -->
          <StackLayout orientation="horizontal" horizontalAlignment="center" marginTop="8">
            <Label
            v-for="size in pageSizes"
            :key="size"
            :text="`${size}`"
            :style="pageSizeChip(size === pageSize)"
            @tap="setPageSize(size)"
            />
          </StackLayout>
        </StackLayout>
        
        <!-- LISTE -->
        <ListView
        row="1"
        :items="paginatedQuizzes"
        @itemTap="onQuizTap"
        >
        <template #default="{ item }">
          <StackLayout :style="cardStyle">
            <GridLayout columns="*, auto">
              <Label col="0" :text="item.title" :style="cardTitleStyle" textWrap="true" />
              <Label
              col="1"
              :text="(item.questionList?.length ?? 0) + ' Q'"
              :style="countStyle"
              />
            </GridLayout>
            <Label :text="item.description" :style="descStyle" textWrap="true" maxLines="2" />
            <Label text="Commencer le quiz ›" :style="ctaStyle" />
          </StackLayout>
        </template>
      </ListView>
      
    </GridLayout>
    
    <!-- Loader -->
    <ActivityIndicator v-if="quizStore.loading" :busy="true" :style="loaderStyle" />
    
    <!-- Empty -->
    <Label
    v-if="!quizStore.loading && filteredQuizzes.length === 0"
    text="Aucun quiz disponible."
    :style="emptyStyle"
    />
    
    <!-- Bandeau visiteur -->
    <StackLayout v-if="!authStore.isAuthenticated" :style="visitorBannerStyle">
      <Label
      text="ℹ️  En tant que visiteur, vous pouvez réaliser les quiz mais vos résultats ne seront pas sauvegardés."
      textWrap="true"
      :style="visitorBannerTextStyle"
      />
      <DsfrButton
      label="Créer un compte pour sauvegarder"
      variant="secondary"
      fullWidth
      @tap="navigateTo('Register')"
      />
    </StackLayout>
    
  </DockLayout>
</Page>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { useQuizStore } from '../../stores/quiz'
import { useAuthStore } from '../../stores/auth'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import BottomMenu from '../../components/layout/BottomMenu.vue'
import SearchBar from '../../components/common/SearchBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'

const quizStore = useQuizStore()
const authStore = useAuthStore()
const { navigateTo } = useNavigation()

// --- STATE ---
const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = ref(10)
const pageSizes = [10, 20, 50]

// --- FILTRAGE ---
const filteredQuizzes = computed(() => {
  const list = quizStore.quizList ?? []
  if (!searchQuery.value) return list
  return quizStore.searchQuiz(searchQuery.value)
})

// --- PAGINATION ---
const totalPages = computed(() =>
Math.max(1, Math.ceil(filteredQuizzes.value.length / pageSize.value))
)

const paginatedQuizzes = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredQuizzes.value.slice(start, start + pageSize.value)
})

// --- WATCHERS ---
watch([searchQuery, pageSize], () => (currentPage.value = 1))
watch([filteredQuizzes, pageSize], () => {
  if (currentPage.value > totalPages.value) currentPage.value = totalPages.value
})

// --- ACTIONS ---
function onQuizTap(args: { index: number }) {
  const quiz = paginatedQuizzes.value[args.index]
  if (!quiz || quiz.id == null) return
  navigateTo('QuizDetail', { id: quiz.id.toString() })
}

function setPageSize(size: number) {
  pageSize.value = size
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

// --- FETCH DATA ---
onMounted(async () => {
  await quizStore.fetchAll()
})

// --- STYLES ---
const containerStyle = { backgroundColor: '#008000' }
const searchBarContainer = { backgroundColor: '#008000', padding: DSFR.spacing.md }
function pageSizeChip(active: boolean) {
  return {
    backgroundColor: active ? '#006400' : '#FFFFFF',
    color: active ? '#FFFFFF' : '#008000',
    borderRadius: 20,
    padding: '4 12',
    margin: '0 4'
  }
}
const cardStyle = { backgroundColor: '#FFFFFF', padding: DSFR.spacing.lg, marginBottom: DSFR.spacing.sm, marginLeft: DSFR.spacing.sm, marginRight: DSFR.spacing.sm, borderRadius: 8 }
const cardTitleStyle = { fontWeight: 'bold', color: '#008000', lineHeight: 10 }
const countStyle = { fontSize: DSFR.typography.sizeSm, color: '#006400', fontWeight: 'bold', backgroundColor: '#90EE90', borderRadius: DSFR.radius.sm, padding: '2 8', textAlignment: 'center', lineHeight: 10 }
const descStyle = { fontSize: DSFR.typography.sizeSm, color: '#004d00', marginTop: DSFR.spacing.xs, marginBottom: DSFR.spacing.sm, lineHeight: 10 }
const ctaStyle = { fontSize: DSFR.typography.sizeSm, color: '#006400', fontWeight: 'bold', lineHeight: 10 }
const loaderStyle = { margin: DSFR.spacing['2xl'] }
const emptyStyle = { textAlignment: 'center', margin: 20, color: '#004d00', fontWeight: 'bold', lineHeight: 10 }
const visitorBannerStyle = { backgroundColor: DSFR.colors.infoLight, padding: DSFR.spacing.lg, margin: DSFR.spacing.md, borderRadius: DSFR.radius.md }
const visitorBannerTextStyle = { fontSize: DSFR.typography.sizeSm, color: DSFR.colors.info, marginBottom: DSFR.spacing.sm, lineHeight: 10 }
</script>