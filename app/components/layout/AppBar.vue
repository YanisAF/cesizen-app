<template>
  <GridLayout rows="auto" columns="auto, *, auto" :style="barStyle">
    <!-- Bouton retour -->
    <Button
      v-if="showBack"
      col="0"
      text="←"
      :style="backStyle"
      accessibilityRole="button"
      accessibilityLabel="Retour"
      @tap="goBack"
    />
    <Label v-else col="0" text="" width="40" />

    <!-- Titre -->
    <Label
      col="1"
      :text="title"
      :style="titleStyle"
      horizontalAlignment="center"
      accessibilityRole="header"
    />

    <!-- Slot action droite -->
    <Button
      v-if="actionIcon"
      col="2"
      :text="actionIcon"
      :style="actionStyle"
      accessibilityRole="button"
      :accessibilityLabel="actionLabel"
      @tap="$emit('action')"
    />
    <Label v-else col="2" text="" width="40" />
  </GridLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

withDefaults(defineProps<{
  title: string
  showBack?: boolean
  actionIcon?: string
  actionLabel?: string
}>(), { showBack: false })

const emit = defineEmits<{ action: []; back: [] }>()
function goBack() { emit('back') }

const barStyle = computed(() => ({
  backgroundColor: '#008000',
  height: 56,
  width: '100%'
}))

const titleStyle = computed(() => ({
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center'
}))

const backStyle = computed(() => ({
  color: '#FFFFFF',
  fontSize: 20,
  backgroundColor: 'transparent',
  width: 40,
  padding: 0
}))

const actionStyle = computed(() => ({
  color: '#FFFFFF',
  fontSize: 20,
  backgroundColor: 'transparent',
  width: 40,
  padding: 0
}))
</script>