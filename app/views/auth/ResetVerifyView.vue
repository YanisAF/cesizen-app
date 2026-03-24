<template>
  <Page>
    <ActionBar>
      <AppBar title="Vérification" showBack @back="navigateTo('ResetRequest')" />
    </ActionBar>
    <ScrollView>
      <StackLayout :style="containerStyle">
        <StackLayout :style="headerStyle">
          <Label text="Saisissez votre code" :style="titleStyle" accessibilityRole="header" />
          <Label :text="`Code envoyé par ${channelLabel} à : ${identifier}`" textWrap="true" :style="subtitleStyle" />
        </StackLayout>

        <StackLayout :style="formStyle">
          <AlertBanner v-if="error" :message="error" type="error" />

          <DsfrInput
            v-model="pin"
            label="Code de vérification"
            hint="4 à 6 chiffres"
            keyboardType="number"
            :error="pinError"
            required
            @blur="validatePin"
          />

          <DsfrButton
            :label="loading ? 'Vérification…' : 'Valider le code'"
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
import { ref, computed } from 'vue'

import { resetApi } from '../../services/api'
import { validators } from '../../utils/validators'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrInput from '../../components/common/DsfrInput.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'



const { navigateTo } = useNavigation()
const identifier = ref((route.query.identifier as string) ?? '')
const channel = ref((route.query.channel as string) ?? 'email')
const channelLabel = computed(() => channel.value === 'email' ? 'e-mail' : 'SMS')

const pin = ref('')
const pinError = ref('')
const loading = ref(false)
const error = ref('')

function validatePin() { pinError.value = validators.pin(pin.value).message }

async function submit() {
  validatePin()
  if (pinError.value) return
  loading.value = true; error.value = ''
  try {
    const res = await resetApi.verifyPin({ identifier: identifier.value, pin: pin.value })
    navigateTo('ResetPassword', { jwt: res.token, channel: channel.value })
  } catch (e: any) {
    error.value = e.message ?? 'Code invalide ou expiré'
  } finally {
    loading.value = false
  }
}

const containerStyle = { backgroundColor: DSFR.colors.background }
const headerStyle = { backgroundColor: DSFR.colors.blueFrance, padding: DSFR.spacing.xl }
const titleStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.size2xl, fontWeight: DSFR.typography.weightBold }
const subtitleStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.sizeSm, opacity: 0.85, marginTop: DSFR.spacing.sm }
const formStyle = { backgroundColor: DSFR.colors.white, padding: DSFR.spacing.xl, margin: DSFR.spacing.lg, borderRadius: DSFR.radius.md }
</script>
