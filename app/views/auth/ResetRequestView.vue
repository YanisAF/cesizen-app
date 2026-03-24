<template>
  <Page>
    <ActionBar>
      <AppBar title="Réinitialisation" showBack @back="navigateTo('Login')" />
    </ActionBar>
    <ScrollView>
      <StackLayout :style="containerStyle">
        <StackLayout :style="headerStyle">
          <Label text="Mot de passe oublié" :style="titleStyle" accessibilityRole="header" />
          <Label text="Choisissez comment recevoir votre code de vérification." textWrap="true" :style="subtitleStyle" />
        </StackLayout>

        <StackLayout :style="formStyle">
          <AlertBanner v-if="error" :message="error" type="error" />
          <AlertBanner v-if="success" message="Code envoyé ! Vérifiez vos messages." type="success" />

          <DsfrInput
            v-model="identifier"
            label="Adresse électronique ou numéro de téléphone"
            hint="Identifiant associé à votre compte"
            :error="idError"
            required
            @blur="validateId"
          />

          <Label text="Canal de réception" :style="labelStyle" />
          <GridLayout columns="*, *" :style="channelGrid">
            <StackLayout
              col="0"
              :style="channelCard(channel === 'email')"
              accessibilityRole="button"
              accessibilityLabel="Recevoir par e-mail"
              @tap="channel = 'email'"
            >
              <Label text="✉️" :style="channelIcon" />
              <Label text="E-mail" :style="channelLabel" />
            </StackLayout>
            <StackLayout
              col="1"
              :style="channelCard(channel === 'sms')"
              accessibilityRole="button"
              accessibilityLabel="Recevoir par SMS"
              @tap="channel = 'sms'"
            >
              <Label text="📱" :style="channelIcon" />
              <Label text="SMS" :style="channelLabel" />
            </StackLayout>
          </GridLayout>

          <DsfrButton
            :label="loading ? 'Envoi…' : 'Envoyer le code'"
            variant="primary"
            fullWidth
            :loading="loading"
            :disabled="loading"
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
import type { ResetChannel } from '../../types'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrInput from '../../components/common/DsfrInput.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'

const { navigateTo } = useNavigation()
const identifier = ref('')
const channel = ref<ResetChannel>('email')
const loading = ref(false)
const error = ref('')
const success = ref(false)
const idError = ref('')

function validateId() {
  idError.value = !identifier.value.trim() ? 'Ce champ est obligatoire' : ''
}

async function submit() {
  validateId()
  if (idError.value) return
  loading.value = true; error.value = ''; success.value = false
  try {
    await resetApi.requestReset({ identifier: identifier.value, channel: channel.value })
    success.value = true
    setTimeout(() => navigateTo('ResetVerify', { identifier: identifier.value, channel: channel.value }), 1500)
  } catch (e: any) {
    error.value = e.message ?? 'Erreur lors de l\'envoi'
  } finally {
    loading.value = false
  }
}

const containerStyle = { backgroundColor: DSFR.colors.background }
const headerStyle = { backgroundColor: DSFR.colors.blueFrance, padding: DSFR.spacing.xl }
const titleStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.size2xl, fontWeight: DSFR.typography.weightBold }
const subtitleStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.sizeMd, opacity: 0.85, marginTop: DSFR.spacing.sm }
const formStyle = { backgroundColor: DSFR.colors.white, padding: DSFR.spacing.xl, margin: DSFR.spacing.lg, borderRadius: DSFR.radius.md }
const labelStyle = { fontSize: DSFR.typography.sizeSm, fontWeight: DSFR.typography.weightMedium, color: DSFR.colors.grey950, marginBottom: DSFR.spacing.sm }
const channelGrid = { marginBottom: DSFR.spacing.lg }
function channelCard(active: boolean) {
  return {
    borderWidth: 2,
    borderColor: active ? DSFR.colors.blueFranceSun : DSFR.colors.grey200,
    borderRadius: DSFR.radius.md,
    padding: DSFR.spacing.md,
    backgroundColor: active ? DSFR.colors.blueFranceLight : DSFR.colors.white,
    margin: DSFR.spacing.xs,
    alignItems: 'center'
  }
}
const channelIcon = { fontSize: 28, textAlignment: 'center' }
const channelLabel = { fontSize: DSFR.typography.sizeMd, fontWeight: DSFR.typography.weightMedium, color: DSFR.colors.grey950, textAlignment: 'center', marginTop: DSFR.spacing.xs }
</script>
