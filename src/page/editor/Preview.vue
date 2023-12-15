<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { userAllComponent } from '@/stores/component.ts'
import Calibration from './components/Calibration.vue'
import PreviewItem from './components/Preview/PreviewItem.vue'
import { isPointInEditorComponent } from '@/utils/editor'

const componentStore = userAllComponent()
const previewRef = ref(null)

const { width: containerWidth, height: containerHeight } =
  useElementSize(previewRef)
const handleDrop = (e: DragEvent) => {
  if (!previewRef.value) return
  const { clientX, clientY } = e
  const { offsetTop, offsetLeft } = previewRef.value

  componentStore.currentPreviewComponent &&
    componentStore.addPreviewComponentArr({
      ...componentStore.currentPreviewComponent,
      width: 100,
      height: 50,
      left: clientX - offsetLeft,
      top: clientY - offsetTop,
      id: 'lego' + uuidv4().replace(/-/g, '')
    })
}

// 画板组件平移，缩放事件
const handleTransformChange = (e) => {
  let {
    scaleWidth,
    scaleHeight,
    deltaX,
    deltaY,
    id,
    width,
    height,
    left,
    top
  } = e

  let transformLeft = left + deltaX,
    transformTop = top + deltaY,
    transformWidth = scaleWidth * width,
    transformHeight = scaleHeight * height
  // 判断此时x, y是否超过了边界
  if (transformLeft + width > containerWidth.value) {
    transformLeft = containerWidth.value - width
  } else if (transformLeft < 0) {
    transformLeft = 0
  }
  if (transformTop + height > containerHeight.value) {
    transformTop = containerHeight.value - height
  } else if (transformTop < 0) {
    transformTop = 0
  }

  // scale
  if (transformWidth > containerWidth.value) {
    transformWidth = containerWidth.value
  }

  if (transformHeight > containerHeight.value) {
    transformHeight = containerHeight.value
  }

  componentStore.changePreviewComponentItem(id, {
    width: transformWidth,
    height: transformHeight,
    left: transformLeft,
    top: transformTop
  })
}

// 右键菜单事件
const handleContextMenuClick = (e) => {
  const { eventName, x, y } = e
  if (eventName === 'delete') {
    const clickComponent = isPointInEditorComponent(
      { x, y },
      componentStore.currentPreviewComponentArr
    )

    clickComponent &&
      componentStore.deletePreviewComponentItem(clickComponent.id)
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
        :key="previewItem.id"
        @transformChange="handleTransformChange"
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
      @click-menu-item="handleContextMenuClick"
    />
  </div>
</template>
