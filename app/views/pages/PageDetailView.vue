<template>
  <Page>
    <ActionBar>
      <AppBar
        :title="page?.title ?? 'Ressource'"
        showBack
        :actionIcon="isSaved ? '🔖' : '☆'"
        :actionLabel="isSaved ? 'Retirer des favoris' : 'Sauvegarder cette ressource'"
        @back="navigateTo('PageList')"
        @action="toggleSave"
      />
    </ActionBar>

    <ScrollView>
      <StackLayout :style="containerStyle">

        <!-- Loader -->
        <ActivityIndicator v-if="pageStore.loading" :busy="true" :style="loaderStyle" />

        <template v-else-if="page">
          
          <!-- Hero image / placeholder -->
          <StackLayout :style="heroContainer">
            <Image
              v-if="page.imageUrl"
              :src="page.imageUrl"
              stretch="aspectFill"
              :style="heroImageStyle"
              :accessibilityLabel="page.title"
            />
            <StackLayout v-else :style="heroPlaceholderStyle">
              <Label text="📄" :style="heroIconStyle" />
            </StackLayout>
          </StackLayout>

          <!-- Header -->
          <StackLayout :style="headerStyle">
            <Label :text="page.category.name" :style="categoryStyle" />
            <Label :text="page.title" :style="titleStyle" textWrap="true" accessibilityRole="header" />
          </StackLayout>

          <!-- Sauvegarde -->
          <StackLayout v-if="authStore.isAuthenticated" :style="saveBarStyle">
            <DsfrButton
              :label="isSaved ? '🔖 Ressource sauvegardée' : '☆ Sauvegarder cette ressource'"
              :variant="isSaved ? 'primary' : 'secondary'"
              fullWidth
              @tap="toggleSave"
            />
          </StackLayout>

          <!-- Contenu -->
          <StackLayout
            v-for="(section, i) in page.content"
            :key="i"
            :style="sectionCardStyle"
          >
            <Label text="Article" :style="sectionTitleStyle" accessibilityRole="header" />
            <Label :text="section.description" :style="descriptionStyle" textWrap="true" />
            <Label
              v-if="section.itemUrl"
              :text="'🔗  ' + section.itemUrl"
              :style="linkStyle"
              @tap="openLink(section.itemUrl)"
              accessibilityRole="link"
              :accessibilityLabel="'Ouvrir le lien : ' + section.name"
            />
          </StackLayout>

        </template>

        <!-- Erreur -->
        <AlertBanner v-if="pageStore.error" :message="pageStore.error" type="error" />

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { useAuthStore } from '../../stores/auth'
import { usePageStore } from '../../stores/pages'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'

const { navigateTo } = useNavigation()
const props = defineProps<{ id: string | number }>()

const authStore = useAuthStore()
const pageStore = usePageStore()

const page = computed(() => pageStore.currentPage)
const isSaved = computed(() => pageStore.isSaved(Number(props.id)))

function toggleSave() {
  if (!authStore.isAuthenticated) {
    navigateTo('Login')
    return
  }
  pageStore.toggleSave(Number(props.id))
}

function openLink(url: string) {
  try {
    const { Utils } = require('@nativescript/core')
    Utils.openUrl(url)
  } catch (_) {}
}

onMounted(() => pageStore.fetchById(Number(props.id)))

// --- STYLES ---
const containerStyle = { backgroundColor: '#008000', paddingBottom: DSFR.spacing.lg }
const heroContainer = { marginBottom: DSFR.spacing.md }
const heroImageStyle = { width: '100%', height: 200, borderRadius: 8 }
const heroPlaceholderStyle = {
  width: '100%',
  height: 160,
  backgroundColor: '#90EE90',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8
}
const heroIconStyle = { fontSize: 56, textAlignment: 'center', lineHeight: 10 }

const headerStyle = { backgroundColor: '#FFFFFF', padding: DSFR.spacing.lg, paddingTop: DSFR.spacing.md, borderRadius: 8, marginBottom: DSFR.spacing.md }
const categoryStyle = {
  fontSize: DSFR.typography.sizeSm,
  color: '#006400',
  fontWeight: DSFR.typography.weightBold,
  textTransform: 'uppercase',
  marginBottom: DSFR.spacing.xs,
  lineHeight: 10
}
const titleStyle = {
  fontSize: DSFR.typography.sizeXl,
  fontWeight: DSFR.typography.weightBold,
  color: '#004d00',
  lineHeight: 10
}

const saveBarStyle = {
  backgroundColor: '#FFFFFF',
  padding: DSFR.spacing.md,
  borderBottomWidth: 1,
  borderBottomColor: DSFR.colors.grey200,
  borderRadius: 8,
  marginBottom: DSFR.spacing.md
}

const sectionCardStyle = {
  backgroundColor: '#FFFFFF',
  padding: DSFR.spacing.lg,
  marginBottom: DSFR.spacing.sm,
  borderRadius: 8
}

const sectionTitleStyle = {
  fontSize: DSFR.typography.sizeLg,
  fontWeight: DSFR.typography.weightBold,
  color: '#006400',
  marginBottom: DSFR.spacing.sm,
  borderLeftWidth: 4,
  borderLeftColor: '#00AA00',
  paddingLeft: DSFR.spacing.sm,
  lineHeight: 10
}

const descriptionStyle = {
  fontSize: DSFR.typography.sizeMd,
  color: '#004d00',
  lineHeight: 10
}

const linkStyle = {
  fontSize: DSFR.typography.sizeMd,
  color: '#006400',
  marginTop: DSFR.spacing.sm,
  textDecoration: 'underline',
  lineHeight: 10
}

const loaderStyle = { margin: DSFR.spacing['2xl'] }
</script>