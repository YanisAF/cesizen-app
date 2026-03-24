<template>
  <Label
    :text="style.label"
    :style="badgeStyle"
    :accessibilityLabel="'Niveau de risque : ' + style.label"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { DSFR, getRiskStyle } from '../../utils/design'

const props = defineProps<{ riskLevel: string }>()

const style = computed(() => getRiskStyle(props.riskLevel))

const badgeStyle = computed(() => ({
  backgroundColor: style.value.bg,
  color: style.value.color,
  fontSize: DSFR.typography.sizeSm,
  fontWeight: DSFR.typography.weightBold,
  borderRadius: DSFR.radius.full,
  padding: '4 12',
  textAlignment: 'center'
}))
</script>
