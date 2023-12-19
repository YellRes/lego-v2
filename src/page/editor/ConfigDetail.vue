<script lang="ts" setup>
import DetailForm from './components/Detail/Form/index.vue'
import { userAllComponent } from '@/stores/component'
import type { ILegoComponentConfig, ICardCase } from '@/types/index'
interface Props {
  componentName?: string
  componentConfig?: Array<ILegoComponentConfig<ICardCase>>
}
const props = withDefaults(defineProps<Props>(), {
  componentName: ''
})

const store = userAllComponent()
</script>

<template>
  <div class="p-[8px]">
    <div>
      <span class="text-base md:text-lg">属性设置</span>
      <a-tag :bordered="false" v-if="props.componentName">
        {{ store.currentPreviewComponent?.name }}
      </a-tag>
    </div>

    <DetailForm
      :settings="store.currentPreviewComponent?.configOptions"
      :config-data="store.currentPreviewComponent?.configData"
    />
  </div>
</template>
