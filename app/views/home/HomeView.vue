<template>
  <Page>
    <DockLayout stretchLastChild="true">

      <!-- Bottom Menu -->
      <BottomMenu dock="bottom" :authStore="authStore" />

      <!-- Contenu principal -->
      <ScrollView>
        <StackLayout :style="containerStyle">

          <!-- Header -->
          <StackLayout :style="heroStyle" horizontalAlignment="center">
            <Image src="~/assets/logo/CESIZen-logo.png" width="140" height="140" stretch="aspectFit" />
            <Label text="Agir ensemble pour la santé mentale" :style="subtitleStyle" textWrap="true" />
          </StackLayout>

          <!-- SearchBar -->
          <StackLayout :style="sectionStyle">
            <Label text="Que recherchez-vous ?" :style="sectionTitleStyle" />
            <SearchBar v-model="searchQuery" hint="Ressources, catégories, quiz…" @search="onSearch" />

            <StackLayout v-if="searchQuery && searchResults.length > 0">
              <Label text="Résultats" :style="resultsTitleStyle" />
              <StackLayout
                v-for="r in searchResults"
                :key="r.type + r.id"
                :style="resultItemStyle"
                @tap="navigateToResult(r)"
              >
                <Label :text="r.type === 'page' ? '📄 ' + r.title : '📝 ' + r.title" :style="resultTextStyle" />
              </StackLayout>
            </StackLayout>

            <Label
              v-else-if="searchQuery && searchResults.length === 0"
              text="Aucun résultat trouvé"
              :style="emptyStyle"
            />
          </StackLayout>

          <!-- Our mission -->
          <StackLayout :style="sectionStyle">
            <Label text="Notre mission" :style="sectionTitleStyle" accessibilityRole="header" />
            <Label
              text="CESIZen est un espace dédié à la sensibilisation aux enjeux de santé mentale. Nous proposons des ressources validées par des professionnels pour mieux comprendre et prévenir les risques liés au stress chronique."
              textWrap="true"
              :style="bodyStyle"
            />
          </StackLayout>

          <!-- Rapid access -->
          <StackLayout :style="sectionStyle">
            <Label text="Accès rapide" :style="sectionTitleStyle" accessibilityRole="header" />
            <GridLayout columns="*, *" rows="auto, auto" :style="quickAccessGrid">
              <StackLayout col="0" row="0" :style="quickCardStyle" @tap="goTo('PageList')">
                <Label text="📚" :style="quickIconStyle" />
                <Label text="Ressources" :style="quickLabelStyle" />
              </StackLayout>
              <StackLayout col="1" row="0" :style="quickCardStyle" @tap="goTo('Categories')">
                <Label text="🏷" :style="quickIconStyle" />
                <Label text="Catégories" :style="quickLabelStyle" />
              </StackLayout>
              <StackLayout col="0" row="1" :style="quickCardStyle" @tap="goTo('QuizList')">
                <Label text="🧠" :style="quickIconStyle" />
                <Label text="Auto-diagnostic" :style="quickLabelStyle" />
              </StackLayout>
              <StackLayout col="1" row="1" :style="quickCardStyle" @tap="goTo('Contact')">
                <Label text="💬" :style="quickIconStyle" />
                <Label text="Nous contacter" :style="quickLabelStyle" />
              </StackLayout>
            </GridLayout>
          </StackLayout>

          <!-- Specialist CTA -->
          <StackLayout :style="ctaStyle">
            <Label text="Besoin d'aide professionnelle ?" :style="ctaTitleStyle" textWrap="true" accessibilityRole="header" />
            <Label
              text="Consulter un spécialiste en santé mentale peut faire la différence. N'attendez pas que la situation s'aggrave."
              textWrap="true"
              :style="ctaBodyStyle"
            />
            <DsfrButton label="Trouver un professionnel" variant="secondary" fullWidth @tap="openSpecialistLink" />
          </StackLayout>

          <!-- User zone -->
          <StackLayout v-if="!authStore.isAuthenticated" :style="sectionStyle">
            <Label text="Créez un compte pour accéder à plus de fonctionnalités" textWrap="true" :style="bodyStyle" />
            <DsfrButton label="Créer un compte" variant="primary" fullWidth @tap="goTo('Register')" />
            <DsfrButton label="Se connecter" variant="secondary" fullWidth @tap="goTo('Login')" />
          </StackLayout>

          <!-- Footer RGPD -->
          <StackLayout :style="footerStyle">
            <Label
              text="Vos données sont protégées conformément au RGPD. Aucune donnée personnelle n'est collectée sans votre consentement."
              textWrap="true"
              :style="footerTextStyle"
            />
          </StackLayout>

        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { usePageStore } from '../../stores/pages'
import { useQuizStore } from '../../stores/quiz'
import { useNavigation } from '../../composables/useNavigation'
import BottomMenu from '../../components/layout/BottomMenu.vue'
import SearchBar from '../../components/common/SearchBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'

const { navigateTo } = useNavigation()
const authStore = useAuthStore()
const pageStore = usePageStore()
const quizStore = useQuizStore()

const searchQuery = ref('')

interface SearchResult { id: number; title: string; type: 'page' | 'quiz' }

const searchResults = computed<SearchResult[]>(() => {
  if (!searchQuery.value.trim()) return []
  const pages = pageStore.search(searchQuery.value).map(p => ({ id: p.id, title: p.title, type: 'page' as const }))
  const quizzes = quizStore.searchQuiz(searchQuery.value).map(q => ({ id: q.id, title: q.title, type: 'quiz' as const }))
  return [...pages, ...quizzes].slice(0, 8)
})

function onSearch(q: string) { searchQuery.value = q }
function navigateToResult(r: SearchResult) {
  searchQuery.value = ''
  if (r.type === 'page') navigateTo('PageDetail', { id: r.id })
  else navigateTo('QuizDetail', { id: r.id })
}
function goTo(name: string) { navigateTo(name) }
function openSpecialistLink() { require('@nativescript/core').Utils.openUrl('https://www.psycom.org/trouver-aide/trouver-un-professionnel/') }

onMounted(async () => {
  await Promise.all([pageStore.fetchAll(), quizStore.fetchAll(), pageStore.fetchCategories()])
})

// Styles
const containerStyle = { backgroundColor: '#FFFFFF' }
const heroStyle = { backgroundColor: '#FFFFFF', padding: 24, paddingBottom: 48, alignItems: 'center', with: '100%' }
const subtitleStyle = { color: '#FFFFFF', fontSize: 16, opacity: 0.9 }
const sectionStyle = { backgroundColor: '#FFFFFF', padding: 16, marginBottom: 12 }
const sectionTitleStyle = { fontSize: 18, fontWeight: 'bold', color: '#008000', marginBottom: 8 }
const bodyStyle = { fontSize: 14, color: '#333333', lineHeight: 10 }
const resultsTitleStyle = { fontSize: 14, color: '#333333', marginBottom: 4 }
const resultItemStyle = { padding: 8, borderBottomWidth: 1, borderBottomColor: '#DDDDDD' }
const resultTextStyle = { fontSize: 14, color: '#008000' }
const emptyStyle = { fontSize: 14, color: '#666666', textAlignment: 'center', padding: 8 }
const quickAccessGrid = { margin: '-8' }
const quickCardStyle = { backgroundColor: '#A3D9A5', borderRadius: 8, margin: 8, padding: 16, alignItems: 'center' }
const quickIconStyle = { fontSize: 28, textAlignment: 'center', marginBottom: 4 }
const quickLabelStyle = { fontSize: 14, fontWeight: '500', color: '#008000', textAlignment: 'center' }
const ctaStyle = { backgroundColor: '#A3D9A5', padding: 24, marginBottom: 16 }
const ctaTitleStyle = { fontSize: 18, fontWeight: 'bold', color: '#008000', marginBottom: 8 }
const ctaBodyStyle = { fontSize: 14, color: '#333333', marginBottom: 12 }
const footerStyle = { backgroundColor: '#F0F0F0', padding: 16 }
const footerTextStyle = { fontSize: 12, color: '#666666', textAlignment: 'center' }
</script>