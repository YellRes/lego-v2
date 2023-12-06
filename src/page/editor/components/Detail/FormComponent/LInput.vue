<script lang="ts">
export default {
  name: 'LInput'
}
</script>

<script setup lang="ts">
import { useFormComponent } from './useFormComponent'
const attr = useAttrs()
const { formValue, handleChange } = useFormComponent<string>(attr.value || '')
</script>

<template>
  <a-input
    :value="formValue"
    :placeholder="`请输入${attr.name || ''}`"
    @change="handleChange"
  />
</template>
