<script setup lang="ts">
import { userAllComponent } from '@/stores/component'
import type { ILegoPreviewComponent } from '@/types/index'

interface Props {
  componentData: Array<ILegoPreviewComponent>
}

const props = withDefaults(defineProps<Props>(), {
  componentData: () => []
})
const store = userAllComponent()
</script>

<template>
  <component
    v-for="(item, index) in props.componentData"
    :key="index"
    :is="item.render"
    v-bind="item.configData"
  />
</template>
