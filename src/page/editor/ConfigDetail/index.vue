<script lang="ts" setup>
import DetailForm from './components/Form/index.vue'
import type { ILegoComponentConfig } from '@/types/index'
import { userAllComponent } from '@/stores/component'
interface Props {
  componentName?: string
  componentConfig?: Array<ILegoComponentConfig>
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
      <a-tag :bordered="false" v-if="store?.currentPreviewComponent?.name">
        {{ props.componentName }}
      </a-tag>
    </div>

    <DetailForm :settings="store?.currentPreviewComponent?.configOptions" />
  </div>
</template>
