<template>
  <Frame>
    <HomeView />
  </Frame>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { usePageStore } from './stores/pages'
import HomeView from './views/home/HomeView.vue'

const pageStore = usePageStore()

onMounted(() => {
  pageStore.loadSavedPages()
})
</script>