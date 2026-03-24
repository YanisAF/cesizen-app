<template>
  <GridLayout columns="*, auto" :style="containerStyle">
    <TextField
      col="0"
      v-model="query"
      :hint="hint"
      :style="inputStyle"
      accessibilityRole="search"
      :accessibilityLabel="hint"
      returnKeyType="search"
      @textChange="onTextChange"
      @returnPress="onSearch"
    />
    <Button
      v-if="query"
      col="1"
      text="✕"
      :style="clearStyle"
      accessibilityRole="button"
      accessibilityLabel="Effacer la recherche"
      @tap="clear"
    />
  </GridLayout>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { DSFR } from '../../utils/design'

const props = withDefaults(defineProps<{
  modelValue?: string
  hint?: string
}>(), {
  modelValue: '',
  hint: 'Rechercher une ressource, une catégorie ou un quiz…'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: [value: string]
}>()

const query = ref(props.modelValue)

watch(() => props.modelValue, v => { query.value = v })

function onTextChange(args: any) {
  query.value = args.value
  emit('update:modelValue', args.value)
  emit('search', args.value)
}

function onSearch() { emit('search', query.value) }

function clear() {
  query.value = ''
  emit('update:modelValue', '')
  emit('search', '')
}

const containerStyle = {
  backgroundColor: DSFR.colors.white,
  borderRadius: DSFR.radius.sm,
  borderWidth: 2,
  borderColor: DSFR.colors.grey425,
  marginBottom: DSFR.spacing.md
}

const inputStyle = {
  fontSize: DSFR.typography.sizeMd,
  color: DSFR.colors.grey950,
  padding: '10 12',
  backgroundColor: 'transparent'
}

const clearStyle = {
  color: DSFR.colors.grey625,
  backgroundColor: 'transparent',
  fontSize: DSFR.typography.sizeMd,
  width: 40
}
</script>
