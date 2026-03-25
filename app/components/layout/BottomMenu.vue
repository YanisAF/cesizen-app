<template>
  <GridLayout rows="auto" :columns="columns" :style="menuStyle">
    <StackLayout
      v-for="(item, i) in computedItems"
      :key="item.route"
      :col="i"
      :style="itemStyle(item.route)"
      accessibilityRole="button"
      :accessibilityLabel="item.label"
      @tap="navigate(item.route)"
    >
      <Image
        :src="item.icon"
        :style="iconStyle(item.route)"
        stretch="aspectFit"
      />
      <Label
        :text="item.label"
        :style="labelStyle(item.route)"
        horizontalAlignment="center"
      />
    </StackLayout>
  </GridLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { useAuthStore } from '../../stores/auth'

const { navigateTo, currentRoute } = useNavigation()
const authStore = useAuthStore()

interface MenuItem { route: string; label: string; icon: string }

const itemsBase: MenuItem[] = [
  { route: 'Categories', label: 'Catégories', icon: '~/assets/icons/categories.png' },
  { route: 'PageList',   label: 'Ressources', icon: '~/assets/icons/resources.png' },
  { route: 'Home',       label: 'Accueil',    icon: '~/assets/icons/home.png' },
  { route: 'QuizList',   label: 'Quiz',       icon: '~/assets/icons/quiz.png' }
]

// Computed items with dynamic profil/login
const computedItems = computed(() => {
  const extra: MenuItem = authStore.isAuthenticated
    ? { route: 'Profile', label: 'Profil', icon: '~/assets/icons/user.png' }
    : { route: 'Login', label: 'Connexion', icon: '~/assets/icons/login.png' }
  return [...itemsBase, extra]
})

const columns = computed(() => computedItems.value.map(() => '*').join(', '))

function navigate(routeName: string) {
  navigateTo(routeName)
}

// Styles
const menuStyle = {
  backgroundColor: '#FFFFFF',
  borderTopWidth: 1,
  borderTopColor: '#008000',
  paddingBottom: 8,
  paddingTop: 6
}

function itemStyle(_route: string) {
  return { padding: '4 0', backgroundColor: 'transparent', alignItems: 'center' }
}

function iconStyle(route: string) {
  // Green by default
  const color = currentRoute.value === route ? 'rgba(0,128,0,0.6)' : '#008000'
  return { width: 32, height: 32, marginBottom: 2, tintColor: color }
}

function labelStyle(route: string) {
  const color = currentRoute.value === route ? 'rgba(0,128,0,0.6)' : '#008000'
  return { fontSize: 12, color, textAlign: 'center', fontWeight: 'bold' }
}
</script>