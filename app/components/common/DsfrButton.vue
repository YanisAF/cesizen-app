<template>
  <Button
    :text="displayLabel"
    :isEnabled="!disabled && !loading"
    :accessibilityLabel="accessibilityLabel || label"
    accessibilityRole="button"
    :style="buttonStyle"
    @tap="onTap"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { DSFR } from '../../utils/design'

const props = withDefaults(defineProps<{
  label: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  accessibilityLabel?: string
  fullWidth?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false
})

const emit = defineEmits<{ tap: [] }>()

// ✅ Label avec loading
const displayLabel = computed(() => {
  return props.loading ? 'Chargement…' : props.label
})

// ✅ Gestion du tap safe
const onTap = () => {
  if (props.disabled || props.loading) return
  emit('tap')
}

// 🎨 Couleurs (vert foncé ajouté)
const GREEN_DARK = '#1B5E20'     // vert foncé
const GREEN_LIGHT = '#2E7D32'    // hover / actif

const buttonStyle = computed(() => {
  const base = {
    borderRadius: DSFR.radius.sm,
    fontWeight: DSFR.typography.weightBold,
    textTransform: 'none' as const,
    width: props.fullWidth ? '100%' : 'auto',
    opacity: props.disabled ? 0.6 : 1
  }

  const sizes = {
    sm: { fontSize: DSFR.typography.sizeSm, padding: '6 12' },
    md: { fontSize: DSFR.typography.sizeMd, padding: '10 24' },
    lg: { fontSize: DSFR.typography.sizeLg, padding: '14 32' }
  }

  const variants = {
    primary: {
      backgroundColor: props.disabled
        ? DSFR.colors.grey425
        : DSFR.colors.blueFranceSun,
      color: DSFR.colors.white
    },

    // ✅ NOUVEAU : bouton vert foncé
    success: {
      backgroundColor: props.disabled
        ? DSFR.colors.grey425
        : GREEN_DARK,
      color: DSFR.colors.white
    },

    secondary: {
      backgroundColor: 'transparent',
      color: props.disabled
        ? DSFR.colors.grey425
        : GREEN_DARK,
      borderWidth: 1,
      borderColor: props.disabled
        ? DSFR.colors.grey425
        : GREEN_DARK
    },

    tertiary: {
      backgroundColor: 'transparent',
      color: props.disabled
        ? DSFR.colors.grey425
        : GREEN_DARK
    },

    danger: {
      backgroundColor: props.disabled
        ? DSFR.colors.grey425
        : DSFR.colors.redMarianneSun,
      color: DSFR.colors.white
    }
  }

  return {
    ...base,
    ...sizes[props.size],
    ...variants[props.variant]
  }
})
</script>