<template>
  <Page actionBarHidden="true">
    <GridLayout rows="56, *">

      <!-- AppBar -->
      <AppBar
        row="0"
        title="Quiz"
        showBack
        @back="confirmExit"
      />

      <ScrollView row="1">
        <StackLayout padding="16">

          <!-- Loader -->
          <ActivityIndicator
            v-if="quizStore.loading"
            busy
            :color="DSFR.colors.blueFranceSun"
            horizontalAlignment="center"
            marginTop="40"
            accessibilityLabel="Chargement du quiz en cours"
          />

          <!-- Error -->
          <AlertBanner
            v-else-if="quizStore.error"
            type="error"
            :message="quizStore.error"
          />

          <!-- Quiz -->
          <template v-else-if="quiz">

            <!-- Header Quiz -->
            <StackLayout class="quiz-header" marginBottom="24">
              <Label
                :text="quiz.title"
                class="quiz-title"
                accessibilityRole="header"
                textWrap
              />
              <Label
                :text="quiz.description"
                class="quiz-desc"
                textWrap
              />

              <!-- Visitor banner -->
              <StackLayout v-if="!authStore.isAuthenticated" class="visitor-banner" marginTop="12">
                <Label
                  text="👤 Vous consultez en tant que visiteur. Connectez-vous pour enregistrer votre résultat."
                  class="visitor-text"
                  textWrap
                />
              </StackLayout>

              <!-- Progression -->
              <StackLayout class="progress-bar-wrap" marginTop="16">
                <Label :text="`Question ${currentIndex + 1} / ${quiz.questionList.length}`" class="progress-label" />
                <Progress
                  :value="progressPct"
                  maxValue="100"
                  :color="DSFR.colors.blueFranceSun"
                  backgroundColor="#e3effd"
                  height="8"
                />
              </StackLayout>
            </StackLayout>

            <!-- Question -->
            <StackLayout
              v-if="currentQuestion"
              class="question-card"
              marginBottom="24"
            >
              <Label
                :text="currentQuestion.statement"
                class="question-text"
                textWrap
                accessibilityRole="header"
              />

              <!-- True or False / Buttons -->
              <GridLayout columns="*, 16, *" marginTop="20">
                <Button
                  col="0"
                  text="✓  Vrai"
                  :class="answerClass(true)"
                  @tap="selectAnswer(true)"
                  accessibilityLabel="Répondre Vrai"
                />
                <Button
                  col="2"
                  text="✗  Faux"
                  :class="answerClass(false)"
                  @tap="selectAnswer(false)"
                  accessibilityLabel="Répondre Faux"
                />
              </GridLayout>
            </StackLayout>

            <!-- Questions navigation -->
            <GridLayout columns="*, 16, *" marginBottom="32">
              <Button
                col="0"
                text="← Précédent"
                :isEnabled="currentIndex > 0"
                @tap="prevQuestion"
              />
              <Button
                v-if="!isLastQuestion"
                col="2"
                text="Suivant →"
                :isEnabled="!currentAnswerUndefined"
                @tap="nextQuestion"
              />
              <Button
              v-if="isLastQuestion"
              col="2"
              text="Terminer"
              :isEnabled="quizStore.isComplete()"
              @tap="submitQuiz"
              />
            </GridLayout>

            <!-- Responses resume -->
            <StackLayout class="answers-summary" marginBottom="16">
              <Label
                text="Récapitulatif de vos réponses"
                class="summary-title"
                accessibilityRole="header"
              />
              <GridLayout
                v-for="(q, i) in quiz.questionList"
                :key="q.id"
                columns="24, *, 40"
                class="summary-row"
              >
                <Label col="0" :text="`${i + 1}.`" class="summary-num" />
                <Label col="1" :text="q.statement" class="summary-q" textWrap />
                <Label
                  col="2"
                  :text="quizStore.answers[q.id] === undefined ? '–' : quizStore.answers[q.id] ? '✓' : '✗'"
                  :class="summaryAnswerClass(q.id)"
                />
              </GridLayout>
            </StackLayout>

          </template>

        </StackLayout>
      </ScrollView>

    </GridLayout>
  </Page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { useQuizStore } from '../../stores/quiz'
import { useAuthStore } from '../../stores/auth'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'
import { Dialogs } from '@nativescript/core'

const { navigateTo, goBack } = useNavigation()
const props = defineProps<{ id: string | number }>() 

const quizStore = useQuizStore()
const authStore = useAuthStore()

const currentIndex = ref(0)

const quizId = computed(() => {
  const id = Number(props.id);
  if (!id) {
    quizStore.error = "ID du quiz invalide";
    return null;
  }
  return id;
})

const quiz = computed(() => quizStore.currentQuiz)

const currentQuestion = computed(() => quiz.value?.questionList?.[currentIndex.value])

const isLastQuestion = computed(() => {
  if (!quiz.value?.questionList?.length) return false // Si aucune question ou quiz pas encore chargé, on retourne false
  return currentIndex.value === quiz.value.questionList.length - 1 // On vérifie si on est sur la dernière question
})

const currentAnswerUndefined = computed(() =>
currentQuestion.value ? quizStore.answers[currentQuestion.value.id] === undefined : true
)

const progressPct = computed(() => {
  if (!quiz.value?.questionList?.length) return 0
  return Math.round(
  (Object.keys(quizStore.answers).length / quiz.value.questionList.length) * 100
  )
})

function answerClass(value: boolean): string {
  if (!currentQuestion.value) return 'answer-btn'
  const chosen = quizStore.answers[currentQuestion.value.id]
  return chosen === value ? 'answer-btn answer-btn--selected' : 'answer-btn'
}

function summaryAnswerClass(questionId: number): string {
  const ans = quizStore.answers[questionId]
  if (ans === undefined) return 'summary-ans summary-ans--empty'
  return ans ? 'summary-ans summary-ans--true' : 'summary-ans summary-ans--false'
}

function selectAnswer(value: boolean) {
  if (!currentQuestion.value) return
  quizStore.setAnswer(currentQuestion.value.id, value)
}

function nextQuestion() {
  console.log('index:', currentIndex.value, 'total:', quiz.value?.questionList.length)
  if (!isLastQuestion.value) currentIndex.value++
}

function prevQuestion() {
  if (currentIndex.value > 0) currentIndex.value--
}

async function submitQuiz() {
  const result = await quizStore.submitQuiz()
  if (result) {
    navigateTo('QuizResult', { result })
  }
}

async function confirmExit() {
  if (Object.keys(quizStore.answers).length === 0) {
    goBack()
    return
  }
  
  const confirmed = await Dialogs.confirm({
    title: 'Quitter le quiz ?',
    message: 'Vos réponses en cours seront perdues.',
    okButtonText: 'Quitter',
    cancelButtonText: 'Continuer'
  })
  
  if (confirmed) {
    quizStore.resetAnswers()
    goBack()
  }
}

onMounted(() => {
  if (!quizId.value) {
    quizStore.error = 'ID de quiz invalide'
    return
  }
  
  quizStore.fetchById(quizId.value)
})
</script>

<style scoped>
.quiz-header { background-color: #e3effd; border-radius: 8; padding: 16; }
.quiz-title  { font-size: 22; font-weight: 700; color: #003189; }
.quiz-desc   { font-size: 15; color: #6a6a6a; margin-top: 6; }
.visitor-banner { background-color: #fff3cd; border-radius: 4; padding: 10; border-left-width: 4; border-left-color: #b34000; }
.visitor-text { font-size: 13; color: #b34000; }
.progress-label { font-size: 13; color: #6a6a6a; margin-bottom: 6; }
.question-card  { background-color: #FFFFFF; border-radius: 8; padding: 20; border-width: 1; border-color: #eeeeee; }
.question-text  { font-size: 18; font-weight: 600; color: #1e1e1e; line-height: 26; }
.answer-btn     { border-radius: 4; padding: 14 8; font-size: 16; font-weight: 600; border-width: 2; border-color: #0063CB; color: #0063CB; background-color: #FFFFFF; }
.answer-btn--selected { background-color: #0063CB; color: #FFFFFF; }
.answers-summary { background-color: #f6f6f6; border-radius: 8; padding: 14; }
.summary-title  { font-size: 15; font-weight: 700; color: #003189; margin-bottom: 10; }
.summary-row    { padding: 6 0; border-bottom-width: 1; border-bottom-color: #eeeeee; }
.summary-num    { font-size: 13; color: #9c9c9c; }
.summary-q      { font-size: 13; color: #1e1e1e; }
.summary-ans    { font-size: 16; font-weight: 700; text-align: center; }
.summary-ans--true  { color: #18753c; }
.summary-ans--false { color: #ce0500; }
.summary-ans--empty { color: #9c9c9c; }
</style>