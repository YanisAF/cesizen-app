<template>
  <GridLayout rows="66" columns="auto, *, auto" :style="barStyle">
    <!-- Return button -->
    <Image
      v-if="showBack"
      col="0"
      src="~/assets/icons/back-redirection.png"
      width="24"
      height="24"
      :style="backImageStyle"
      verticalAlignment="center"
      accessibilityRole="button"
      accessibilityLabel="Retour"
      @tap="goBack"
    />
    <Label v-else col="0" text="" width="40" />

    <!-- Title -->
    <Label
      col="1"
      :text="title"
      :style="titleStyle"
      horizontalAlignment="center"
      verticalAlignment="center"
      accessibilityRole="header"
    />

    <!-- Slot right action -->
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
  height: 66,
}))

const backImageStyle = computed(() => ({
  tintColor: '#FFFFFF',
  width: 24,
  height: 24,
  margin: 10
}))

const titleStyle = computed(() => ({
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center'
}))

const actionStyle = computed(() => ({
  color: '#FFFFFF',
  fontSize: 20,
  backgroundColor: 'transparent',
  width: 40,
  padding: 0
}))
</script>