<template>
  <Page actionBarHidden="true">
    <StackLayout verticalAlignment="center" horizontalAlignment="center" padding="32">
      
      <Label text="⚠️" fontSize="64" textAlignment="center" marginBottom="24" />
      
      <Label
        text="Application momentanément indisponible"
        fontSize="20"
        fontWeight="700"
        color="#003189"
        textAlignment="center"
        textWrap="true"
        marginBottom="16"
      />
      
      <Label
        text="Nous nous excusons pour la gêne occasionnée. Veuillez réessayer dans quelques instants."
        fontSize="14"
        color="#6a6a6a"
        textAlignment="center"
        textWrap="true"
        marginBottom="40"
      />

      <DsfrButton
        label="Réessayer"
        variant="primary"
        :loading="loading"
        @tap="retry"
      />

    </StackLayout>
  </Page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { authApi } from '../services/api'
import { useAppStore } from '../stores/app'
import DsfrButton from '../components/common/DsfrButton.vue'

const appStore = useAppStore()
const loading = ref(false)

async function retry() {
  loading.value = true
  try {
    await authApi.checkBackend()
    appStore.isDown = false
  } catch (_) {
  } finally {
    loading.value = false
  }
}
</script>