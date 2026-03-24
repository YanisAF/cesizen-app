<template>
  <Page>
    <ActionBar>
      <AppBar title="Mon compte" showBack @back="goBack()" />
    </ActionBar>

    <ScrollView>
      <StackLayout padding="16">

        <AlertBanner
          v-if="userStore.error"
          type="error"
          :message="userStore.error"
          @dismiss="userStore.clearError()"
        />

        <!-- Infos compte -->
        <StackLayout class="section" marginBottom="20">
          <Label text="Informations du compte" class="section-title" accessibilityRole="header" />
          <GridLayout columns="120, *" class="info-row">
            <Label col="0" text="Identifiant" class="info-label" />
            <Label col="1" :text="authStore.user?.user_name ?? '—'" class="info-value" />
          </GridLayout>
          <GridLayout columns="120, *" class="info-row">
            <Label col="0" text="Adresse e-mail" class="info-label" />
            <Label col="1" :text="authStore.user?.email ?? '—'" class="info-value" />
          </GridLayout>
          <GridLayout columns="120, *" class="info-row">
            <Label col="0" text="Téléphone" class="info-label" />
            <Label col="1" :text="authStore.user?.phone ?? 'Non renseigné'" class="info-value" />
          </GridLayout>
          <GridLayout columns="120, *" class="info-row">
            <Label col="0" text="Rôle" class="info-label" />
            <Label col="1" :text="roleLabel" class="info-value" />
          </GridLayout>
        </StackLayout>

        <!-- Modifier le mot de passe -->
        <StackLayout class="section" marginBottom="20">
          <Label text="Sécurité" class="section-title" accessibilityRole="header" />
          <DsfrButton
            label="Modifier mon mot de passe"
            variant="secondary"
            @tap="navigateTo('ResetRequest')"
          />
        </StackLayout>

        <!-- Mes diagnostics -->
        <StackLayout class="section" marginBottom="20">
          <Label text="Mes diagnostics" class="section-title" accessibilityRole="header" />
          <DsfrButton
            label="Consulter mon historique"
            variant="secondary"
            @tap="navigateTo('DiagnosisHistory')"
          />
        </StackLayout>

        <!-- RGPD — Droits -->
        <StackLayout class="section rgpd-section" marginBottom="20">
          <Label text="Vos droits (RGPD)" class="section-title" accessibilityRole="header" />
          <Label
            text="Conformément au Règlement Général sur la Protection des Données, vous pouvez à tout moment désactiver ou supprimer votre compte. Vos données seront anonymisées sous 30 jours."
            class="rgpd-text"
            textWrap
            marginBottom="16"
          />

          <!-- Désactiver -->
          <DsfrButton
            label="Désactiver mon compte"
            variant="secondary"
            :loading="userStore.loading"
            marginBottom="10"
            @tap="confirmDeactivate"
          />

          <!-- Supprimer -->
          <DsfrButton
            label="Supprimer définitivement mon compte"
            variant="danger"
            :loading="userStore.loading"
            @tap="confirmDelete"
          />
        </StackLayout>

        <!-- Déconnexion -->
        <DsfrButton
          label="Se déconnecter"
          variant="tertiary"
          @tap="logout"
        />

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNavigation } from '../../composables/useNavigation'

import { useAuthStore } from '../../stores/auth'
import { useUserStore } from '../../stores/user'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'
import { Dialogs } from '@nativescript/core'


const { navigateTo, goBack } = useNavigation()
const authStore = useAuthStore()
const userStore = useUserStore()

const roleLabel = computed(() => authStore.user?.role === 'ROLE_ADMIN' ? 'Administrateur' : 'Utilisateur')

async function confirmDeactivate() {
  const ok = await Dialogs.confirm({
    title: 'Désactiver le compte',
    message: 'Votre compte sera désactivé. Vous pourrez le réactiver en vous reconnectant. Confirmer ?',
    okButtonText: 'Désactiver',
    cancelButtonText: 'Annuler'
  })
  if (ok && authStore.user?.id) {
    await userStore.deactivateAccount(authStore.user.id)
    navigateTo('Home')
  }
}

async function confirmDelete() {
  const ok = await Dialogs.confirm({
    title: 'Supprimer le compte',
    message: 'Cette action est irréversible. Toutes vos données seront supprimées. Confirmer la suppression ?',
    okButtonText: 'Supprimer',
    cancelButtonText: 'Annuler'
  })
  if (ok && authStore.user?.id) {
    await userStore.deleteAccount(authStore.user.id)
    navigateTo('Home')
  }
}

function logout() {
  authStore.logout()
  navigateTo('Home')
}
</script>

<style scoped>
.section       { background-color: #FFFFFF; border-radius: 8; padding: 16; border-width: 1; border-color: #eeeeee; }
.section-title { font-size: 16; font-weight: 700; color: #003189; margin-bottom: 14; }
.info-row      { padding: 8 0; border-bottom-width: 1; border-bottom-color: #f0f0f0; }
.info-label    { font-size: 14; color: #6a6a6a; }
.info-value    { font-size: 14; color: #1e1e1e; font-weight: 500; }
.rgpd-section  { border-left-width: 4; border-left-color: #0063CB; }
.rgpd-text     { font-size: 13; color: #6a6a6a; line-height: 20; }
</style>
