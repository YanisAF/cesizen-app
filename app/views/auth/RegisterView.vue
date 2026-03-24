<template>
  <Page>
    <ActionBar>
      <AppBar title="Créer un compte" showBack @back="navigateTo('Login')" />
    </ActionBar>

    <ScrollView>
      <StackLayout :style="containerStyle">

        <!-- Header -->
        <StackLayout :style="headerStyle">
          <Label text="🇫🇷 République Française" :style="rfStyle" />
          <Label text="Créer un compte" :style="pageTitleStyle" />
          <Label
            text="Vos données sont protégées conformément au RGPD."
            :style="rgpdStyle"
            textWrap
          />
        </StackLayout>

        <!-- Form -->
        <StackLayout :style="formStyle">

          <AlertBanner v-if="authStore.error" :message="authStore.error" type="error" />

          <DsfrInput
            v-model="form.user_name"
            label="Identifiant"
            hint="3 à 32 caractères"
            :error="errors.user_name"
            required
            @blur="validateUserName"
          />

          <DsfrInput
            v-model="form.email"
            label="Email"
            hint="exemple@domaine.fr"
            keyboardType="email"
            :error="errors.email"
            required
            @blur="validateEmail"
          />

          <DsfrInput
            v-model="form.phone"
            label="Téléphone (optionnel)"
            hint="06 00 00 00 00"
            keyboardType="phone"
            :error="errors.phone"
            @blur="validatePhone"
          />

          <DsfrInput
            v-model="form.password"
            label="Mot de passe"
            hint="Minimum 6 caractères"
            :secure="true"
            :error="errors.password"
            required
            @blur="validatePassword"
          />

          <DsfrInput
            v-model="form.passwordConfirm"
            label="Confirmer le mot de passe"
            :secure="true"
            :error="errors.passwordConfirm"
            required
            @blur="validatePasswordConfirm"
          />

          <!-- RGPD -->
          <StackLayout :style="consentStyle">
            <Label
              text="En créant votre compte, vous acceptez notre politique de confidentialité."
              textWrap
              :style="consentTextStyle"
            />
          </StackLayout>

          <DsfrButton
            :label="authStore.loading ? 'Création…' : 'Créer mon compte'"
            variant="primary"
            fullWidth
            :loading="authStore.loading"
            :disabled="authStore.loading || !canSubmit"
            @tap="submit"
          />

        </StackLayout>

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { useAuthStore } from '../../stores/auth'
import { DSFR } from '../../utils/design'

import AppBar from '../../components/layout/AppBar.vue'
import DsfrInput from '../../components/common/DsfrInput.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'

const { navigateTo } = useNavigation()
const authStore = useAuthStore()

// --------------------
// STATE
// --------------------
const form = reactive({
  user_name: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirm: ''
})

const errors = reactive({
  user_name: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirm: ''
})

// --------------------
// VALIDATORS (simples)
// --------------------
const validateUserName = () => {
  if (!form.user_name) return errors.user_name = 'Champ requis'
  if (form.user_name.length < 3) return errors.user_name = 'Trop court'
  if (form.user_name.length > 32) return errors.user_name = 'Trop long'
  errors.user_name = ''
}

const validateEmail = () => {
  if (!form.email) return errors.email = 'Champ requis'
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  errors.email = ok ? '' : 'Email invalide'
}

const validatePhone = () => {
  if (!form.phone) return errors.phone = '' // ✅ optionnel
  const ok = /^(\+33|0)[1-9](\d{2}){4}$/.test(form.phone.replace(/\s/g, ''))
  errors.phone = ok ? '' : 'Téléphone invalide'
}

const validatePassword = () => {
  if (!form.password) return errors.password = 'Champ requis'
  if (form.password.length < 6) return errors.password = 'Minimum 6 caractères'
  errors.password = ''
}

const validatePasswordConfirm = () => {
  if (!form.passwordConfirm) return errors.passwordConfirm = 'Champ requis'
  if (form.password !== form.passwordConfirm) {
    return errors.passwordConfirm = 'Les mots de passe ne correspondent pas'
  }
  errors.passwordConfirm = ''
}

// --------------------
// GLOBAL VALIDATION
// --------------------
const validateAll = () => {
  validateUserName()
  validateEmail()
  validatePhone()
  validatePassword()
  validatePasswordConfirm()
}

const canSubmit = computed(() => {
  return (
    form.user_name &&
    form.email &&
    form.password &&
    form.passwordConfirm &&
    !Object.values(errors).some(e => e)
  )
})

// --------------------
// SUBMIT
// --------------------
const submit = async () => {
  validateAll()
  if (!canSubmit.value) return

  authStore.clearError()

  try {
    await authStore.register({
      user_name: form.user_name,
      email: form.email,
      phone: form.phone || undefined,
      password: form.password
    })

    navigateTo('Home')
  } catch (e) {
    console.log(e)
  }
}

// --------------------
// STYLES
// --------------------
const containerStyle = { backgroundColor: DSFR.colors.background }
const headerStyle = { backgroundColor: DSFR.colors.blueFrance, padding: DSFR.spacing.xl }
const rfStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.sizeSm, marginBottom: DSFR.spacing.xs }
const pageTitleStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.size2xl }
const rgpdStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.sizeSm, marginTop: DSFR.spacing.sm }
const formStyle = { backgroundColor: DSFR.colors.white, padding: DSFR.spacing.xl, margin: DSFR.spacing.lg }
const consentStyle = { backgroundColor: DSFR.colors.infoLight, padding: DSFR.spacing.md, marginBottom: DSFR.spacing.lg }
const consentTextStyle = { fontSize: DSFR.typography.sizeSm }
</script>