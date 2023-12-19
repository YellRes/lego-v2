<script setup lang="ts">
import type { ILegoComponentConfig, ICardCase } from '@/types/index'
interface Props {
  settings?: Array<ILegoComponentConfig<ICardCase>>
  configData: Partial<ICardCase>
}
const props = withDefaults(defineProps<Props>(), {})

// formData
const formData = ref<Partial<ICardCase>>({})
watchEffect(() => {
  formData.value = props.configData
})

// FormComponent 下面所有的组件
let formComponents: any = ref<any>([])
const initAllFormComponents = () => {
  formComponents.value = import.meta.glob('../FormComponent/*.vue', {
    eager: true
  })
}

initAllFormComponents()
</script>

<template>
  <a-form
    v-if="props.settings?.length"
    :model="formData"
    :label-col="{
      style: {
        width: '80px'
      }
    }"
  >
    <a-form-item
      v-for="(item, index) in props.settings"
      :key="index"
      :label="item.name"
      :name="item.field"
    >
      <component
        :is="formComponents[`../FormComponent/${item.type}.vue`].default"
        v-bind="{
          value: formData[item.field]
        }"
      />
    </a-form-item>
  </a-form>
  <a-empty v-else :description="null" />
</template>
