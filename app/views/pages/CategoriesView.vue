<template>
  <Page>
    <!-- AppBar verte -->
    <ActionBar>
      <AppBar 
        title="Catégories" 
        showBack 
        @back="navigateTo('Home')" 
      />
    </ActionBar>

    <DockLayout stretchLastChild="true">
      <!-- Bottom menu -->
      <BottomMenu dock="bottom" />

      <ScrollView>
        <StackLayout :style="containerStyle">
          <Label 
            text="Explorer par catégorie" 
            :style="pageTitleStyle" 
            accessibilityRole="header" 
          />

          <ActivityIndicator 
            v-if="pageStore.loading" 
            :busy="true" 
            color="#FFFFFF" 
          />

          <!-- Liste des catégories -->
          <StackLayout
            v-for="cat in pageStore.categories"
            :key="cat.id"
            :style="categoryCardStyle"
            accessibilityRole="button"
            :accessibilityLabel="'Voir les ressources : ' + cat.name"
            @tap="selectCategory(cat.id)"
          >
            <GridLayout columns="*, auto">
              <Label col="0" :text="cat.name" :style="catNameStyle" />
              <Label col="1" :text="countForCategory(cat.id) + ' ressource(s)'" :style="catCountStyle" />
            </GridLayout>
            <Label text="›" :style="arrowStyle" />
          </StackLayout>

          <Label 
            v-if="pageStore.categories.length === 0 && !pageStore.loading"
            text="Aucune catégorie disponible." 
            :style="emptyStyle" 
          />
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { usePageStore } from '../../stores/pages'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import BottomMenu from '../../components/layout/BottomMenu.vue'
import { useNavigation } from '../../composables/useNavigation'

const { navigateTo } = useNavigation()
const pageStore = usePageStore()

function countForCategory(id: number) {
  return pageStore.filterByCategory(id).length
}

function selectCategory(id: number) {
  navigateTo('PageList', { categoryId: id })
}

onMounted(async () => {
  await Promise.all([pageStore.fetchAll(), pageStore.fetchCategories()])
})

// ======================
// Styles
// ======================
const containerStyle = { 
  backgroundColor: '#FFFFFF', 
  padding: DSFR.spacing.lg 
}

const pageTitleStyle = {
  fontSize: DSFR.typography.size2xl,
  fontWeight: DSFR.typography.weightBold,
  color: '#008000',
  marginBottom: DSFR.spacing.lg
}

const categoryCardStyle = {
  backgroundColor: '#008000',
  borderRadius: DSFR.radius.md,
  padding: DSFR.spacing.lg,
  marginBottom: DSFR.spacing.sm,
  borderLeftWidth: 4,
  borderLeftColor: '#FFFFFF'
}

const catNameStyle = {
  fontSize: DSFR.typography.sizeLg,
  fontWeight: DSFR.typography.weightBold,
  color: '#FFFFFF'
}

const catCountStyle = {
  fontSize: DSFR.typography.sizeSm,
  fontWeight: DSFR.typography.weightMedium,
  color: '#FFFFFF'
}

const arrowStyle = {
  fontSize: DSFR.typography.sizeXl,
  color: '#008000',
  textAlignment: 'right'
}

const emptyStyle = {
  fontSize: DSFR.typography.sizeMd,
  color: '#FFFFFF',
  textAlignment: 'center',
  margin: DSFR.spacing['2xl']
}
</script>