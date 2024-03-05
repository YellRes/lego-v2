<script lang="ts">
export default {
  name: 'LSelect'
}
</script>

<script setup lang="ts">
interface Props {
  value: string
}

const attr = useAttrs()
const emits = defineEmits(['change'])
const props = withDefaults(defineProps<Props>(), {})

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
  <a-select v-bind="attr" v-model:value="_formValue"> </a-select>
</template>
