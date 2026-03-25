<template>
  <Page actionBarHidden="true">
    <GridLayout rows="56, *">

      <!-- AppBar -->
      <AppBar
        row="0"
        title="Contacter le support"
        showBack
        @back="goBack()"
      />

      <ScrollView row="1">
        <StackLayout padding="16">

          <!--  Header -->
          <StackLayout class="page-header" marginBottom="24">
            <Label text="Une question ? Un problème ?" class="page-title" accessibilityRole="header" textWrap />
            <Label
              text="Notre équipe est là pour vous aider. Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais."
              class="page-subtitle"
              textWrap
            />
          </StackLayout>

          <!-- Succès envoi -->
          <AlertBanner
            v-if="sent"
            type="success"
            message="Votre message a bien été envoyé. Nous vous répondrons dans les 48h."
            marginBottom="16"
          />

          <!-- Formulaire -->
          <StackLayout v-else>
            <!-- Nom -->
            <DsfrInput
              v-model="form.name"
              label="Nom et prénom *"
              placeholder="Ex : Marie Dupont"
              :error="errors.name"
              accessibilityLabel="Votre nom et prénom"
            />

            <!-- Email -->
            <DsfrInput
              v-model="form.email"
              label="Adresse électronique *"
              placeholder="exemple@domaine.fr"
              keyboardType="email"
              :error="errors.email"
              accessibilityLabel="Votre adresse électronique"
            />

            <!-- Sujet -->
            <StackLayout marginBottom="16">
              <Label text="Sujet *" class="input-label" />
              <ListPicker
                :items="subjects"
                :selectedIndex="selectedSubjectIndex"
                @selectedIndexChange="onSubjectChange"
                height="120"
                accessibilityLabel="Choisir un sujet"
              />
            </StackLayout>

            <!-- Message -->
            <DsfrInput
              v-model="form.message"
              label="Message *"
              placeholder="Décrivez votre demande..."
              :multiline="true"
              :height="120"
              :error="errors.message"
              accessibilityLabel="Votre message"
            />

            <!-- Mention RGPD -->
            <StackLayout class="rgpd-notice" marginBottom="20">
              <Label
                text="🔒 Vos données ne sont collectées que pour traiter votre demande, conformément au RGPD. Elles ne seront jamais transmises à des tiers."
                class="rgpd-text"
                textWrap
              />
            </StackLayout>

            <DsfrButton
              label="Envoyer le message"
              variant="primary"
              :loading="loading"
              @tap="submitForm"
            />
          </StackLayout>

          <!-- Liens utiles -->
          <StackLayout class="useful-links" marginTop="32">
            <Label text="Ressources d'urgence" class="links-title" accessibilityRole="header" />
            <StackLayout class="link-row" @tap="openUrl('https://www.3114.fr')">
              <Label text="🆘 3114 — Numéro national prévention suicide" class="link-text" />
              <Label text="Appel gratuit 24h/24 →" class="link-sub" />
            </StackLayout>
            <StackLayout class="link-row" @tap="openUrl('https://www.psycom.org')">
              <Label text="🧠 Psycom — Guide santé mentale" class="link-text" />
              <Label text="psycom.org →" class="link-sub" />
            </StackLayout>
            <StackLayout class="link-row" @tap="openUrl('https://www.ameli.fr/assure/sante/themes/sante-mentale')">
              <Label text="🏥 Ameli — Santé mentale" class="link-text" />
              <Label text="ameli.fr →" class="link-sub" />
            </StackLayout>
          </StackLayout>

        </StackLayout>
      </ScrollView>

    </GridLayout>
  </Page>
</template>

<script setup lang="ts">
import { useNavigation } from '../../composables/useNavigation'
import { ref, reactive } from 'vue'

import { useAuthStore } from '../../stores/auth'
import { validators, validateForm } from '../../utils/validators'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import DsfrInput from '../../components/common/DsfrInput.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'
import { Utils } from '@nativescript/core'


const { navigateTo, goBack } = useNavigation()
const authStore = useAuthStore()

const sent = ref(false)
const loading = ref(false)

const subjects = [
  'Problème technique',
  'Question sur les ressources',
  'Signaler un contenu',
  'Compte utilisateur',
  'Suggestion d\'amélioration',
  'Autre'
]
const selectedSubjectIndex = ref(0)

const form = reactive({
  name: authStore.user?.user_name ?? '',
  email: authStore.user?.email ?? '',
  message: ''
})
const errors = reactive({ name: '', email: '', message: '' })

function onSubjectChange(e: any) {
  selectedSubjectIndex.value = e.value ?? 0
}

function openUrl(url: string) {
  Utils.openUrl(url)
}

async function submitForm() {
  const { valid, errors: fieldErrors } = validateForm({
    name: validators.required(form.name, 'Le nom'),
    email: validators.email(form.email),
    message: validators.required(form.message, 'Le message')
  })
  Object.assign(errors, { name: fieldErrors.name ?? '', email: fieldErrors.email ?? '', message: fieldErrors.message ?? '' })

  if (!valid) return

  loading.value = true
  // Simulation d'envoi (à connecter à un endpoint /contact futur)
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  sent.value = true
}
</script>

<style scoped>
.page-header   { background-color: #e3effd; border-radius: 8; padding: 20; }
.page-title    { font-size: 22; font-weight: 700; color: #003189; }
.page-subtitle { font-size: 15; color: #6a6a6a; margin-top: 6; line-height: 22; }
.input-label   { font-size: 14; font-weight: 600; color: #1e1e1e; margin-bottom: 6; }
.rgpd-notice   { background-color: #e3effd; border-radius: 4; padding: 12; }
.rgpd-text     { font-size: 12; color: #003189; line-height: 18; }
.useful-links  { background-color: #f6f6f6; border-radius: 8; padding: 16; }
.links-title   { font-size: 16; font-weight: 700; color: #003189; margin-bottom: 12; }
.link-row      { padding: 10 0; border-bottom-width: 1; border-bottom-color: #eeeeee; }
.link-text     { font-size: 14; color: #1e1e1e; font-weight: 500; }
.link-sub      { font-size: 12; color: #0063CB; margin-top: 2; }
</style>
