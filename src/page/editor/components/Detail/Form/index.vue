<script setup lang="ts">
import type { ILegoComponentConfig } from '../../index.d.ts'
interface Props {
  settings?: Array<ILegoComponentConfig>
}
const props = withDefaults(defineProps<Props>(), {})

// formData
const formData = ref<Record<string, unknown>>({})
watchEffect(() => {
  formData.value = props.settings?.reduce((prev, cur) => {
    prev[cur.key] = cur.value
    return prev
  }, {})
})

// FormComponent 下面所有的组件
// let formComponents: unknown = null
// const initAllFormComponents = () => {
//   formComponents = import.meta.glob('../FormComponent/*.vue', {
//     eager: true
//   })
// }

// initAllFormComponents()
</script>

<template>
  <a-form :model="formData" v-if="props.settings?.length">
    <a-form-item
      v-for="(item, index) in props.settings"
      :key="index"
      :label="item.name"
      :name="item.key"
    >
      <!-- <component :is="formComponents?[`../FormComponent/${item.type}.vue`]" /> -->
    </a-form-item>
  </a-form>
  <a-empty v-else :description="null" />
</template>
../../../../../types/index
