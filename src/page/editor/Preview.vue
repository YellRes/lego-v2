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
  if (!previewRef.value) return
  const { clientX, clientY } = e
  const { offsetTop, offsetLeft } = previewRef.value

  componentStore.currentPreviewComponent &&
    componentStore.addPreviewComponentArr({
      ...componentStore.currentPreviewComponent,
      left: clientX - offsetLeft,
      top: clientY - offsetTop,
      id: 'lego' + uuidv4().replace(/-/g, '')
    })
}

const handleContextMenuClick = (e) => {
  const { eventName } = e
  if (eventName === 'delete') {
  }
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
        v-bind="previewItem"
        :key="previewItem.key"
      />
    </div>

    <!-- 右键菜单 -->
    <RightClickMenu
      :container="previewRef"
      :options="[
        {
          label: '删除',
          eventName: 'delete'
        }
      ]"
      @click-context-menu="handleContextMenuClick"
    />
  </div>
</template>
