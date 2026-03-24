<template>
  <Page>
    <!-- AppBar -->
    <ActionBar>
      <AppBar title="Ressources" showBack @back="navigateTo('Home')" />
    </ActionBar>
    
    <DockLayout stretchLastChild="true">
      
      <!-- Bottom Menu -->
      <BottomMenu dock="bottom" />
      
      <!-- Pagination -->
      <StackLayout
        dock="bottom"
        orientation="horizontal"
        horizontalAlignment="center"
        margin="8"
        spacing="8"
      >
        <Button text="« Prev" :isEnabled="currentPage > 1" @tap="prevPage" />
        <Label :text="`Page ${currentPage} / ${totalPages}`" verticalAlignment="center" />
        <Button text="Next »" :isEnabled="currentPage < totalPages" @tap="nextPage" />
      </StackLayout>
      
      <!-- Contenu principal -->
      <GridLayout rows="auto, *" :style="containerStyle">
        
        <!-- HEADER (fixe) -->
        <StackLayout row="0" :style="searchBarContainer">
          <SearchBar
            v-model="searchQuery"
            @search="onSearch"
            hint="Rechercher une ressource..."
          />
          
          <!-- Filtres -->
          <ScrollView orientation="horizontal" :style="filterScrollStyle">
            <StackLayout orientation="horizontal">
              <Label
                text="Tous"
                :style="filterChip(selectedCategory === null)"
                @tap="selectCategory(null)"
              />
              <Label
                v-for="cat in categories"
                :key="cat.id"
                :text="cat.name"
                :style="filterChip(selectedCategory === cat.id)"
                @tap="selectCategory(cat.id)"
              />
            </StackLayout>
          </ScrollView>
          
          <!-- Page size -->
          <StackLayout orientation="horizontal" horizontalAlignment="center" marginTop="8">
            <Label
              v-for="size in pageSizes"
              :key="size"
              :text="`${size}`"
              :style="pageSizeChip(size === pageSize)"
              @tap="setPageSize(size)"
            />
          </StackLayout>
        </StackLayout>
        
        <!-- LISTE (scroll native) -->
        <ListView
          row="1"
          :items="paginatedPages"
          @itemTap="onPageTap"
        >
          <template #default="{ item }">
            <GridLayout columns="auto, *" :style="cardStyle">
              <StackLayout col="0" :style="imagePlaceholder">
                <Label text="📄" :style="imageIcon" />
              </StackLayout>
              
              <StackLayout col="1" :style="cardContent">
                <Label :text="item.title" :style="cardTitleStyle" textWrap="true" />
                <Label :text="item.category.name" :style="cardCategoryStyle" />
                <Label
                  v-if="item.content && item.content[0]"
                  :text="item.content[0].description"
                  :style="cardPreviewStyle"
                  textWrap="true"
                  maxLines="2"
                />
              </StackLayout>
            </GridLayout>
          </template>
        </ListView>
        
      </GridLayout>
      
      <!-- Loader -->
      <ActivityIndicator
        v-if="loading"
        :busy="true"
        :style="loaderStyle"
      />
      
      <!-- Empty -->
      <Label
        v-if="!loading && filteredPages.length === 0"
        text="Aucune ressource disponible."
        :style="emptyStyle"
      />
      
    </DockLayout>
  </Page>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { usePageStore } from '../../stores/pages'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import BottomMenu from '../../components/layout/BottomMenu.vue'
import SearchBar from '../../components/common/SearchBar.vue'

const pageStore = usePageStore()
const { navigateTo } = useNavigation()

// --- STATE ---
const searchQuery = ref('')
const selectedCategory = ref<number | null>(null)
const currentPage = ref(1)
const pageSize = ref(10)
const pageSizes = [10, 20, 50]
const categories = ref<{ id: number; name: string }[]>([])
const loading = ref(false)

// --- COMPUTED ---
// Filtrage et recherche
const filteredPages = computed(() => {
  let result = searchQuery.value
    ? pageStore.pages.filter(p => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    : pageStore.pages

  if (selectedCategory.value !== null) {
    result = result.filter(p => p.category.id === selectedCategory.value)
  }

  return result
})

// Pagination
const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredPages.value.length / pageSize.value))
)

const paginatedPages = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredPages.value.slice(start, start + pageSize.value)
})

// --- WATCHERS ---
watch([searchQuery, selectedCategory, pageSize], () => {
  currentPage.value = 1
})

watch([filteredPages, pageSize], () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
})

// --- ACTIONS ---
function onSearch(q: string) {
  searchQuery.value = q
}

function selectCategory(id: number | null) {
  selectedCategory.value = id
}

function setPageSize(size: number) {
  pageSize.value = size
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

// --- ITEM TAP SÉCURISÉ ---
function onPageTap(args: any) {
  const index = args.index
  const item = paginatedPages.value[index]
  if (!item || item.id === undefined || item.id === null) {
    console.warn('ID de ressource invalide ou item manquant', item)
    return
  }

  const id = Number(item.id)
  if (!Number.isInteger(id) || id <= 0) {
    console.warn('ID de ressource invalide:', item.id)
    return
  }

  navigateTo('PageDetail', { id })
}

// --- INIT ---
onMounted(async () => {
  loading.value = true
  try {
    await pageStore.fetchAll()
    await pageStore.fetchCategories()
    categories.value = pageStore.categories
  } finally {
    loading.value = false
  }
})

// --- STYLES ---
const containerStyle = { backgroundColor: '#008000' }
const searchBarContainer = { backgroundColor: '#008000', padding: DSFR.spacing.md }
const filterScrollStyle = { marginTop: DSFR.spacing.xs }

function filterChip(active: boolean) {
  return {
    backgroundColor: active ? '#006400' : '#FFFFFF',
    color: active ? '#FFFFFF' : '#008000',
    borderRadius: 20,
    padding: '6 16',
    margin: '0 4'
  }
}

function pageSizeChip(active: boolean) {
  return {
    backgroundColor: active ? '#006400' : '#FFFFFF',
    color: active ? '#FFFFFF' : '#008000',
    borderRadius: 20,
    padding: '4 12',
    margin: '0 4'
  }
}

const cardStyle = { backgroundColor: '#FFFFFF', marginBottom: 1, padding: 12 }
const imagePlaceholder = { width: 50, height: 50, backgroundColor: '#90EE90', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 10 }
const imageIcon = { fontSize: 20 }
const cardContent = {}
const cardTitleStyle = { fontWeight: 'bold', color: '#008000' }
const cardCategoryStyle = { fontSize: 12, color: '#006400' }
const cardPreviewStyle = { fontSize: 12, color: '#006400' }
const loaderStyle = { margin: 20 }
const emptyStyle = { textAlignment: 'center', margin: 20, color: '#006400' }
</script>