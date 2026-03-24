<template>
  <Page>
    <ActionBar>
      <AppBar
        title="Mon profil"
        showBack
        actionIcon="⚙"
        actionLabel="Paramètres du compte"
        @back="navigateTo('Home')"
        @action="navigateTo('Account')"
      />
    </ActionBar>

    <DockLayout stretchLastChild="true">
      <BottomMenu dock="bottom" />

      <ScrollView>
        <StackLayout :style="containerStyle">

          <ActivityIndicator v-if="userStore.loading" :busy="true" :style="loaderStyle" />

          <template v-else-if="user">
            <!-- Avatar & nom -->
            <StackLayout :style="profileHeaderStyle">
              <Label :text="initials" :style="avatarStyle" />
              <Label :text="user.user_name" :style="nameStyle" accessibilityRole="header" />
              <Label :text="user.email" :style="emailStyle" />
              <Label v-if="user.role === 'ROLE_USER'" text="Utilisateur" :style="roleBadgeStyle" />
            </StackLayout>

            <!-- Infos -->
            <StackLayout :style="sectionStyle">
              <Label text="Informations du compte" :style="sectionTitleStyle" accessibilityRole="header" />
              <GridLayout v-for="info in infos" :key="info.label" columns="auto, *" rows="auto" :style="infoRowStyle">
                <Label col="0" :text="info.label" :style="infoLabelStyle" />
                <Label col="1" :text="info.value" :style="infoValueStyle" textWrap="true" />
              </GridLayout>
            </StackLayout>

            <!-- Actions rapides -->
            <StackLayout :style="sectionStyle">
              <Label text="Mes activités" :style="sectionTitleStyle" accessibilityRole="header" />
              <DsfrButton
                label="📊  Mes résultats de diagnostic"
                variant="secondary"
                fullWidth
                @tap="navigateTo('DiagnosisHistory')"
              />
              <DsfrButton
                label="🔑  Modifier mon mot de passe"
                variant="secondary"
                fullWidth
                @tap="navigateTo('ResetRequest')"
              />
            </StackLayout>

            <!-- Zone danger -->
            <StackLayout :style="dangerZoneStyle">
              <Label text="Zone de danger" :style="dangerTitleStyle" accessibilityRole="header" />
              <DsfrButton
                label="Désactiver mon compte"
                variant="secondary"
                fullWidth
                @tap="confirmDeactivate"
              />
              <DsfrButton
                label="Supprimer définitivement mon compte"
                variant="danger"
                fullWidth
                @tap="confirmDelete"
              />
            </StackLayout>

            <!-- Note RGPD -->
            <StackLayout :style="rgpdStyle">
              <Label
                text="Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression à tout moment."
                textWrap="true"
                :style="rgpdTextStyle"
              />
            </StackLayout>
          </template>

          <AlertBanner v-if="userStore.error" :message="userStore.error" type="error" />

        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useNavigation } from '../../composables/useNavigation'

import { useAuthStore } from '../../stores/auth'
import { useUserStore } from '../../stores/user'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import BottomMenu from '../../components/layout/BottomMenu.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'


const { navigateTo, goBack } = useNavigation()
const authStore = useAuthStore()
const userStore = useUserStore()

const user = computed(() => authStore.user)

const initials = computed(() => {
  const n = user.value?.user_name ?? '?'
  return n.slice(0, 2).toUpperCase()
})

const infos = computed(() => [
  { label: 'Identifiant', value: user.value?.user_name ?? '' },
  { label: 'E-mail', value: user.value?.email ?? '' },
  { label: 'Téléphone', value: user.value?.phone ?? 'Non renseigné' },
  { label: 'Rôle', value: user.value?.role === 'ROLE_USER' ? 'Utilisateur' : 'Administrateur' }
])

async function confirmDeactivate() {
  try {
    const { Dialogs } = require('@nativescript/core')
    const result = await Dialogs.confirm({
      title: 'Désactiver le compte',
      message: 'Votre compte sera désactivé. Vous pourrez le réactiver en contactant le support.',
      okButtonText: 'Désactiver',
      cancelButtonText: 'Annuler'
    })
    if (result && user.value?.id) await userStore.deactivateAccount(user.value.id)
  } catch (_) { /* test env */ }
}

async function confirmDelete() {
  try {
    const { Dialogs } = require('@nativescript/core')
    const result = await Dialogs.confirm({
      title: 'Supprimer le compte',
      message: 'Cette action est irréversible. Toutes vos données seront supprimées conformément au RGPD.',
      okButtonText: 'Supprimer définitivement',
      cancelButtonText: 'Annuler'
    })
    if (result && user.value?.id) await userStore.deleteAccount(user.value.id)
  } catch (_) { /* test env */ }
}

onMounted(async () => {
  if (user.value?.id) await userStore.fetchProfile(user.value.id)
})

const containerStyle = { backgroundColor: DSFR.colors.background }
const profileHeaderStyle = {
  backgroundColor: DSFR.colors.blueFrance,
  padding: DSFR.spacing.xl,
  alignItems: 'center'
}
const avatarStyle = {
  width: 72, height: 72, borderRadius: 36,
  backgroundColor: DSFR.colors.blueFranceLight,
  color: DSFR.colors.blueFrance,
  fontSize: DSFR.typography.size2xl,
  fontWeight: DSFR.typography.weightBold,
  textAlignment: 'center',
  lineHeight: 72
}
const nameStyle = {
  color: DSFR.colors.white,
  fontSize: DSFR.typography.sizeXl,
  fontWeight: DSFR.typography.weightBold,
  marginTop: DSFR.spacing.sm
}
const emailStyle = { color: DSFR.colors.white, fontSize: DSFR.typography.sizeMd, opacity: 0.8 }
const roleBadgeStyle = {
  backgroundColor: DSFR.colors.blueFranceLight,
  color: DSFR.colors.blueFrance,
  fontSize: DSFR.typography.sizeSm,
  fontWeight: DSFR.typography.weightBold,
  borderRadius: DSFR.radius.full,
  padding: '4 12',
  marginTop: DSFR.spacing.sm
}
const sectionStyle = { backgroundColor: DSFR.colors.white, padding: DSFR.spacing.lg, marginBottom: DSFR.spacing.xs }
const sectionTitleStyle = { fontSize: DSFR.typography.sizeLg, fontWeight: DSFR.typography.weightBold, color: DSFR.colors.grey950, marginBottom: DSFR.spacing.md }
const infoRowStyle = { paddingBottom: DSFR.spacing.sm, borderBottomWidth: 1, borderBottomColor: DSFR.colors.grey200, marginBottom: DSFR.spacing.sm }
const infoLabelStyle = { fontSize: DSFR.typography.sizeSm, color: DSFR.colors.grey625, width: 110 }
const infoValueStyle = { fontSize: DSFR.typography.sizeMd, color: DSFR.colors.grey950, fontWeight: DSFR.typography.weightMedium }
const dangerZoneStyle = { backgroundColor: DSFR.colors.errorLight, padding: DSFR.spacing.lg, marginBottom: DSFR.spacing.xs }
const dangerTitleStyle = { fontSize: DSFR.typography.sizeLg, fontWeight: DSFR.typography.weightBold, color: DSFR.colors.error, marginBottom: DSFR.spacing.md }
const loaderStyle = { margin: DSFR.spacing['2xl'] }
const rgpdStyle = { backgroundColor: DSFR.colors.grey100, padding: DSFR.spacing.lg }
const rgpdTextStyle = { fontSize: DSFR.typography.sizeSm, color: DSFR.colors.grey625 }
</script>
