<template>
  <StackLayout
    v-if="visible"
    :style="bannerStyle"
    accessibilityRole="alert"
    :accessibilityLabel="message"
  >
    <Label :text="iconText + '  ' + message" :style="textStyle" textWrap="true" />
  </StackLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { DSFR } from '../../utils/design'

const props = withDefaults(defineProps<{
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  visible?: boolean
}>(), {
  type: 'info',
  visible: true
})

const config = computed(() => ({
  success: { bg: DSFR.colors.successLight, color: DSFR.colors.success, icon: '✓' },
  error:   { bg: DSFR.colors.errorLight,   color: DSFR.colors.error,   icon: '✕' },
  warning: { bg: DSFR.colors.warningLight, color: DSFR.colors.warning, icon: '⚠' },
  info:    { bg: DSFR.colors.infoLight,    color: DSFR.colors.info,    icon: 'ℹ' }
}[props.type]))

const iconText = computed(() => config.value.icon)

const bannerStyle = computed(() => ({
  backgroundColor: config.value.bg,
  borderLeftWidth: 4,
  borderLeftColor: config.value.color,
  borderRadius: DSFR.radius.sm,
  padding: DSFR.spacing.md,
  marginBottom: DSFR.spacing.md
}))

const textStyle = computed(() => ({
  color: config.value.color,
  fontSize: DSFR.typography.sizeMd,
  fontWeight: DSFR.typography.weightMedium
}))
</script>
