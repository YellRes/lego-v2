<script lang="ts" setup>
import DetailForm from './components/Detail/Form/index.vue'
import type { ILegoComponentConfig } from '@/types/index'
interface Props {
  componentName?: string
  componentConfig?: Array<ILegoComponentConfig>
}
const props = withDefaults(defineProps<Props>(), {
  componentName: ''
})
</script>

<template>
  <div class="p-[8px]">
    <div>
      <span class="text-base md:text-lg">属性设置</span>
      <a-tag :bordered="false" v-if="props.componentName">
        {{ props.componentName }}
      </a-tag>
    </div>

    <DetailForm :settings="props.componentConfig" />
  </div>
</template>
