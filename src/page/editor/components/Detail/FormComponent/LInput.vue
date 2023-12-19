<script lang="ts">
export default {
  name: 'LInput'
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number | string
  }>(),
  {
    value: ''
  }
)
const attr = useAttrs()
console.log(attr)
console.log(props.value)
const emits = defineEmits(['change'])

const formValue = ref<string>(attr.value)
const handleChange = (newValue: string) => {
  emits('change', newValue)
}

// const { formValue, handleChange } = useFormComponent<string>(attr.value || '')
</script>

<template>
  <a-input
    :value="formValue"
    :placeholder="`请输入${attr.name || ''}`"
    @change="handleChange"
  />
</template>
