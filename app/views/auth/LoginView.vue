<template>
  <Page>
    <ActionBar>
      <AppBar title="Connexion" showBack @back="navigateTo('Home')" />
    </ActionBar>

    <ScrollView>
      <StackLayout :style="containerStyle">

        <!-- RF banner -->
        <StackLayout :style="headerStyle">
          <Label text="🇫🇷  République Française" :style="rfStyle" />
          <Label text="Se connecter" :style="pageTitleStyle" accessibilityRole="header" />
        </StackLayout>

        <StackLayout :style="formStyle">
          <AlertBanner v-if="authStore.error" :message="authStore.error" type="error" />

          <DsfrInput
            v-model="form.username"
            label="Identifiant ou adresse électronique"
            hint="Entrez votre identifiant"
            :error="errors.username"
            required
            @blur="validateField('username')"
          />

          <DsfrInput
            v-model="form.password"
            label="Mot de passe"
            hint="Entrez votre mot de passe"
            :secure="true"
            :error="errors.password"
            required
            @blur="validateField('password')"
          />

          <DsfrButton
            label="Mot de passe oublié ?"
            variant="tertiary"
            @tap="navigateTo('ResetRequest')"
          />

          <DsfrButton
            :label="authStore.loading ? 'Connexion…' : 'Se connecter'"
            variant="primary"
            fullWidth
            :loading="authStore.loading"
            :disabled="authStore.loading"
            @tap="submit"
          />

          <StackLayout :style="dividerStyle">
            <Label text="Pas encore de compte ?" :style="dividerTextStyle" />
            <DsfrButton
              label="Créer un compte"
              variant="secondary"
              fullWidth
              @tap="navigateTo('Register')"
            />
          </StackLayout>
        </StackLayout>

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useNavigation } from '../../composables/useNavigation'

import { useAuthStore } from '../../stores/auth'
import { useUserStore } from '../../stores/user'
import { validators } from '../../utils/validators'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrInput from '../../components/common/DsfrInput.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'


const { navigateTo, goBack } = useNavigation()
const authStore = useAuthStore()
const userStore = useUserStore()

const form = reactive({ username: '', password: '' })
const errors = reactive({ username: '', password: '' })

function validateField(field: 'username' | 'password') {
  if (field === 'username') {
    errors.username = !form.username.trim() ? 'Ce champ est obligatoire' : ''
  } else {
    errors.password = validators.password(form.password).message
  }
}

function isFormValid() {
  validateField('username')
  validateField('password')
  return !errors.username && !errors.password
}

async function submit() {
  if (!isFormValid()) return
  authStore.clearError()
  try {
    await authStore.login({ identifier: form.username, password: form.password })
    // Chargement user profil after login
    navigateTo('Home')
  } catch (_) { /* error in the store */ }
}

// Styles
const containerStyle = { backgroundColor: DSFR.colors.background }
const headerStyle = {
  backgroundColor: DSFR.colors.blueFrance,
  padding: DSFR.spacing.xl
}
const rfStyle = {
  color: DSFR.colors.white,
  fontSize: DSFR.typography.sizeSm,
  opacity: 0.85,
  marginBottom: DSFR.spacing.sm
}
const pageTitleStyle = {
  color: DSFR.colors.white,
  fontSize: DSFR.typography.size2xl,
  fontWeight: DSFR.typography.weightBold
}
const formStyle = {
  backgroundColor: DSFR.colors.white,
  padding: DSFR.spacing.xl,
  margin: DSFR.spacing.lg,
  borderRadius: DSFR.radius.md
}
const dividerStyle = {
  marginTop: DSFR.spacing.xl,
  paddingTop: DSFR.spacing.lg,
  borderTopWidth: 1,
  borderTopColor: DSFR.colors.grey200
}
const dividerTextStyle = {
  fontSize: DSFR.typography.sizeMd,
  color: DSFR.colors.grey625,
  marginBottom: DSFR.spacing.sm
}
</script>
