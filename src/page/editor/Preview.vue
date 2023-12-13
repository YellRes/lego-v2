<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { userAllComponent } from '@/stores/component.ts'
import Calibration from './components/Calibration.vue'
import PreviewItem from './components/Preview/PreviewItem.vue'

const componentStore = userAllComponent()
const previewRef = ref(null)

// const canvasZone = ref(null)
// const { x, y } = useMouseInElement(canvasZone)
const handleDrop = (e: DragEvent) => {
  const { x, y } = e
  componentStore.currentPreviewComponent &&
    componentStore.addPreviewComponentArr({
      ...componentStore.currentPreviewComponent,
      left: x,
      top: y,
      id: uuidv4()
    })
}
</script>

<template>
  <div class="bg-white h-[100%] relative" ref="previewRef">
    <!-- 顶部刻度线 -->
    <Calibration
      :container-ref="previewRef"
      :step="10"
      :off-set="40"
      :mark-tag="100"
      style="left: 0; top: 0"
    />

    <!-- 左边刻度线 -->
    <Calibration
      :container-ref="previewRef"
      :step="10"
      :mark-tag="100"
      :off-set="40"
      :position="'left'"
      style="left: 0; top: 0"
    />

    <div
      class="drop-zone h-[100%] relative p-[50px]"
      @dragover.prevent
      @drop="handleDrop"
    >
      <PreviewItem
        v-for="previewItem in componentStore.currentPreviewComponentArr"
        v-bind:key="previewItem.key"
        v-bind="previewItem"
      />
    </div>
  </div>
</template>
