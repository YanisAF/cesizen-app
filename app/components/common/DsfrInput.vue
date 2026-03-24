<template>
  <StackLayout marginBottom="16">
    <Label
      v-if="label"
      :text="label + (required ? ' *' : '')"
      fontSize="14"
      fontWeight="500"
      color="#1e1e1e"
      marginBottom="6"
    />
    <TextField
      :text="modelValue"
      :hint="hint || ''"
      :secure="secure === true"
      :editable="!disabled"
      fontSize="16"
      color="#1e1e1e"
      backgroundColor="#FFFFFF"
      borderWidth="2"
      :borderColor="error ? '#ce0500' : '#6a6a6a'"
      borderRadius="4"
      padding="10"
      :accessibilityLabel="label || hint || ''"
      @textChange="onTextChange"
      @blur="onBlur"
    />
    <Label
      v-if="error"
      :text="error"
      fontSize="13"
      color="#ce0500"
      marginTop="4"
      accessibilityRole="alert"
    />
  </StackLayout>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  modelValue: string
  label?: string
  hint?: string
  error?: string
  secure?: boolean
  keyboardType?: string
  disabled?: boolean
  required?: boolean
  multiline?: boolean
  height?: number
}>(), {
  secure: false,
  disabled: false,
  required: false,
  multiline: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: []
}>()

function onTextChange(args: any) {
 console.log('=== textChange ===')
  console.log('args type:', typeof args)
  console.log('args value:', args?.value)
  
  const val = args?.value ?? ''
  console.log('val emis:', val)
  emit('update:modelValue', val)
}

function onBlur() {
  emit('blur')
}
</script>