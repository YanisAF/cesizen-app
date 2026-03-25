<template>
  <Page actionBarHidden="true">
    <GridLayout rows="56, *">
      
      <!-- AppBar -->
      <AppBar
      row="0"
      title="Résultat du diagnostic"
      showBack
      @back="goHome"
      />
      
      <ScrollView row="1">
        <StackLayout padding="16">
          
          <ActivityIndicator
          v-if="quizStore.loading"
          busy
          :color="DSFR.colors.blueFranceSun"
          horizontalAlignment="center"
          marginTop="40"
          />
          
          <template v-else-if="result">
            <!-- Risk level badge -->
            <StackLayout class="result-hero" marginBottom="24">
              <Label text="Votre résultat" class="result-label" accessibilityRole="header" />
              <StackLayout :style="riskBadgeStyle" class="risk-badge" marginTop="12">
                <Label :text="riskStyle.label" class="risk-label" />
              </StackLayout>
              <Label :text="`Score total : ${result.totalScore} pts`" class="score-text" marginTop="8" />
            </StackLayout>
            
            <!-- Personalized message from backend -->
            <StackLayout class="result-message-card" marginBottom="24">
              <Label text="Ce que cela signifie" class="card-title" accessibilityRole="header" />
              <Label :text="result.message" class="card-body" textWrap />
            </StackLayout>
            
            <!-- Recommendations based on risk level -->
            <StackLayout class="recommendations-card" marginBottom="24">
              <Label text="Recommandations" class="card-title" accessibilityRole="header" />
              <Label :text="recommendations" class="card-body" textWrap />
            </StackLayout>
            
            <!-- Specialist resource -->
            <StackLayout class="specialist-card" marginBottom="24">
              <Label text="Besoin d'aide ?" class="card-title" accessibilityRole="header" />
              <Label text="Un professionnel de santé mentale peut vous aider à mieux comprendre et gérer votre niveau de stress." class="card-body" textWrap />
              <DsfrButton label="Consulter un spécialiste" variant="secondary" marginTop="12" @tap="openSpecialistHelp" />
            </StackLayout>
            
            <!-- Save button (authenticated users only) -->
            <StackLayout v-if="authStore.isAuthenticated" marginBottom="16">
              <Label v-if="saved" text="✅ Résultat enregistré dans votre historique" class="saved-text" textAlign="center" />
              <DsfrButton v-else label="💾 Enregistrer ce résultat" variant="primary" @tap="saveResult" />
            </StackLayout>
            
            <!-- Guest: call to action to register -->
            <StackLayout v-else class="cta-register" marginBottom="16">
              <Label text="Créez un compte gratuit pour conserver vos diagnostics et suivre votre évolution." class="cta-text" textWrap />
              <DsfrButton label="Créer un compte" variant="primary" marginTop="10" @tap="navigateTo('Register')" />
            </StackLayout>
            
            <!-- Back to home -->
            <DsfrButton label="Retour à l'accueil" variant="tertiary" @tap="goHome" />
          </template>
          
          <!-- No result available -->
          <StackLayout v-else>
            <AlertBanner type="info" message="Aucun résultat disponible. Veuillez effectuer un quiz." />
            <DsfrButton label="Voir les quiz" variant="primary" marginTop="16" @tap="navigateTo('QuizList')" />
          </StackLayout>
          
        </StackLayout>
      </ScrollView>
      
    </GridLayout>
  </Page>
</template>

<script setup lang="ts">
import { useNavigation } from '../../composables/useNavigation'
import { ref, computed } from 'vue'
import { useQuizStore } from '../../stores/quiz'
import { useAuthStore } from '../../stores/auth'
import { DSFR, getRiskStyle } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'
import { Utils } from '@nativescript/core'

const { navigateTo, goBack } = useNavigation()
const props = defineProps<{ id: string }>()

const quizStore = useQuizStore()
const authStore = useAuthStore()

const saved = ref(false)

const result = computed(() => quizStore.currentResult)
const riskStyle = computed(() => result.value ? getRiskStyle(result.value.riskLevel) : getRiskStyle('FAIBLE'))

const riskBadgeStyle = computed(() => ({
  backgroundColor: riskStyle.value.bg,
  borderColor: riskStyle.value.color,
  borderWidth: 2,
  borderRadius: 8,
  padding: '10 20'
}))

const recommendations = computed(() => {
  const level = result.value?.riskLevel
  const map: Record<string, string> = {
    FAIBLE: 'Votre niveau de stress semble gérable. Maintenez vos bonnes habitudes : sommeil régulier, activité physique et moments de détente.',
    MODERE: 'Votre stress mérite attention. Identifiez les sources de pression et explorez des techniques comme la respiration profonde ou la méditation.',
    ELEVE: 'Un niveau de stress élevé peut affecter votre santé. Nous vous conseillons vivement de consulter un professionnel de santé mentale.',
    CRITIQUE: 'Ce niveau de stress est préoccupant. Veuillez contacter rapidement un médecin ou un psychologue. Vous n\'êtes pas seul(e).'
  }
  return map[level ?? 'FAIBLE']
})

function saveResult() {
  saved.value = true
}

function openSpecialistHelp() {
  Utils.openUrl('https://www.psycom.org/sinformer/trouver-un-psy')
}

function goHome() {
  quizStore.resetAnswers()
  navigateTo('Home')
}
</script>