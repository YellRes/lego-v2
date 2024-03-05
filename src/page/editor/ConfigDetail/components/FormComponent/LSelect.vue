<script lang="ts">
export default {
  name: 'LSelect'
}
</script>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
interface Props {
  value: string
}

const attr = useAttrs()
const emits = defineEmits(['change'])
const props = withDefaults(defineProps<Props>(), {
  value: ''
})

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
  <a-select v-bind="attr" v-model:value="_formValue">
    <template v-if="attr.isCustomOption" #option="{ value: val, label }">
      <div class="w-full flex items-center">
        <SvgIcon :name="val" class="mr-4" />
        {{ label }}
      </div>
    </template>

    <template v-if="attr.mode === 'tags'" #tagRender="{ value: val, label }">
      <div class="w-full flex items-center">
        <SvgIcon :name="val" class="mr-4" />
        {{ label }}
      </div>
    </template>
  </a-select>
</template>
