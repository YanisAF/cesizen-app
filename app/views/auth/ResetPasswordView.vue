<template>
  <Page>
    <ActionBar>
      <AppBar title="Nouveau mot de passe" showBack @back="navigateTo('ResetVerify')" />
    </ActionBar>
    <ScrollView>
      <StackLayout :style="containerStyle">
        <StackLayout :style="headerStyle">
          <Label text="Nouveau mot de passe" :style="titleStyle" accessibilityRole="header" />
        </StackLayout>

        <StackLayout :style="formStyle">
          <AlertBanner v-if="error" :message="error" type="error" />
          <AlertBanner v-if="success" message="Mot de passe modifié avec succès !" type="success" />

          <DsfrInput
            v-model="newPassword"
            label="Nouveau mot de passe"
            hint="Au moins 6 caractères"
            :secure="true"
            :error="passwordError"
            required
            @blur="validatePwd"
          />
          <DsfrInput
            v-model="confirmPassword"
            label="Confirmer le mot de passe"
            :secure="true"
            :error="confirmError"
            required
            @blur="validateConfirm"
          />

          <DsfrButton
            :label="loading ? 'Enregistrement…' : 'Enregistrer'"
            variant="primary"
            fullWidth
            :loading="loading"
            :disabled="loading || success"
            @tap="submit"
          />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts" setup>
import { useNavigation } from '../../composables/useNavigation'
import { ref } from 'vue'

import { resetApi } from '../../services/api'
import { validators } from '../../utils/validators'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrInput from '../../components/common/DsfrInput.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'

const { navigateTo } = useNavigation()
const props = defineProps<{
  jwt?: string
  channel?: string
}>()

const jwt = ref(props.jwt ?? '')
const channel = ref(props.channel ?? 'email')

const newPassword = ref('')
const confirmPassword = ref('')
const passwordError = ref('')
const confirmError = ref('')
const loading = ref(false)
const error = ref('')
const success = ref(false)

function validatePwd() { passwordError.value = validators.password(newPassword.value).message }
function validateConfirm() {
  console.log('new:', JSON.stringify(newPassword.value))
  console.log('confirm:', JSON.stringify(confirmPassword.value))
  console.log('égaux ?', newPassword.value === confirmPassword.value)
  confirmError.value = validators.passwordConfirm(newPassword.value, confirmPassword.value).message
}

async function submit() {
  validatePwd(); validateConfirm()
  if (passwordError.value || confirmError.value) return
  loading.value = true; error.value = ''
  try {
    await resetApi.resetPassword({ jwt: jwt.value, newPassword: newPassword.value, channel: channel.value as any })
    success.value = true
    setTimeout(() => navigateTo('Login'), 2000)
  } catch (e: any) {
    error.value = e.message ?? 'Erreur lors de la réinitialisation'
  } finally {
    loading.value = false
  }
}

const containerStyle = { backgroundColor: DSFR.colors.background }
const headerStyle = { backgroundColor: DSFR.colors.blueFrance, padding: DSFR.spacing.xl }
const titleStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.size2xl, fontWeight: DSFR.typography.weightBold }
const formStyle = { backgroundColor: DSFR.colors.white, padding: DSFR.spacing.xl, margin: DSFR.spacing.lg, borderRadius: DSFR.radius.md }
</script>
