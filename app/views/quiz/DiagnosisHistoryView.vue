<template>
  <Page>
    <ActionBar>
      <AppBar title="Mes diagnostics" showBack @back="goBack()" />
    </ActionBar>

    <ScrollView>
      <StackLayout padding="16">

        <ActivityIndicator
          v-if="quizStore.loading"
          busy
          :color="DSFR.colors.blueFranceSun"
          horizontalAlignment="center"
          marginTop="40"
          accessibilityLabel="Chargement de l'historique"
        />

        <AlertBanner
          v-else-if="quizStore.error"
          type="error"
          :message="quizStore.error"
        />

        <!-- Liste vide -->
        <StackLayout v-else-if="quizStore.history.length === 0" class="empty-state">
          <Label text="📋" class="empty-icon" textAlign="center" />
          <Label
            text="Aucun diagnostic enregistré"
            class="empty-title"
            textAlign="center"
          />
          <Label
            text="Effectuez un quiz pour obtenir votre premier bilan."
            class="empty-subtitle"
            textAlign="center"
            textWrap
          />
          <DsfrButton
            label="Voir les quiz"
            variant="primary"
            marginTop="20"
            @tap="navigateTo('QuizList')"
          />
        </StackLayout>

        <!-- Résultats -->
        <template v-else>
          <Label
            :text="`${quizStore.history.length} diagnostic(s) enregistré(s)`"
            class="count-label"
            marginBottom="16"
          />

          <StackLayout
            v-for="item in quizStore.history"
            :key="item.id"
            class="result-card"
            marginBottom="12"
          >
            <GridLayout columns="*, 90">
              <StackLayout col="0">
                <Label :text="`Quiz #${item.quizId}`" class="card-quiz-label" />
                <Label :text="formatDate(item.id)" class="card-date" />
              </StackLayout>
              <StackLayout col="1" :style="riskBadgeStyle(item.riskLevel)" class="risk-pill">
                <Label :text="getRiskStyle(item.riskLevel).label" class="risk-pill-text" textWrap />
              </StackLayout>
            </GridLayout>

            <Label :text="`Score : ${item.totalScore} pts`" class="card-score" marginTop="8" />
            <Label :text="item.message" class="card-message" textWrap marginTop="4" />
          </StackLayout>
        </template>

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useNavigation } from '../../composables/useNavigation'

import { useQuizStore } from '../../stores/quiz'
import { useAuthStore } from '../../stores/auth'
import { DSFR, getRiskStyle } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'
import type { RiskLevel } from '../../types'


const quizStore = useQuizStore()
const { navigateTo, goBack } = useNavigation()
const authStore = useAuthStore()

function riskBadgeStyle(riskLevel: string) {
  const s = getRiskStyle(riskLevel)
  return { backgroundColor: s.bg, borderColor: s.color, borderWidth: 1, borderRadius: 20, padding: '4 10' }
}

function formatDate(id: number): string {
  // L'API ne renvoie pas de date dans ResultDtoResponse actuel — on affiche l'id
  return `Diagnostic n°${id}`
}

onMounted(() => {
  if (authStore.user?.id) {
    quizStore.fetchHistory(authStore.user.id)
  }
})
</script>

<style scoped>
.empty-state    { padding: 40 16; align-items: center; }
.empty-icon     { font-size: 48; margin-bottom: 12; }
.empty-title    { font-size: 18; font-weight: 700; color: #003189; }
.empty-subtitle { font-size: 15; color: #6a6a6a; margin-top: 6; }
.count-label    { font-size: 14; color: #6a6a6a; }
.result-card    { background-color: #FFFFFF; border-radius: 8; padding: 16; border-width: 1; border-color: #eeeeee; }
.card-quiz-label { font-size: 16; font-weight: 700; color: #003189; }
.card-date      { font-size: 12; color: #9c9c9c; margin-top: 2; }
.risk-pill      { align-items: center; justify-content: center; }
.risk-pill-text { font-size: 12; font-weight: 700; text-align: center; }
.card-score     { font-size: 15; font-weight: 600; color: #1e1e1e; }
.card-message   { font-size: 14; color: #6a6a6a; line-height: 20; }
</style>
