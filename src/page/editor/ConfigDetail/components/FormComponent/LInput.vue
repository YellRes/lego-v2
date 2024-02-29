<script lang="ts">
export default {
  name: 'LInput'
}
</script>

<script setup lang="ts">
interface Props {
  value?: string
}
const attr = useAttrs()
const props = withDefaults(defineProps<Props>(), {})
const emits = defineEmits(['change'])

const _formValue = computed({
  get: () => {
    return props.value
  },
  set: (val) => {
    emits('change', val)
  }
})
</script>

<template>
  <a-input
    v-model:value="_formValue"
    :placeholder="`请输入${attr.name || ''}`"
  />
</template>
