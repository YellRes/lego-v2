<script setup lang="ts">
import Moveable from 'vue3-moveable'
import { ILegoPreviewComponent } from '@/types/index'
import { userAllComponent } from '@/stores/component.ts'

const componentStore = userAllComponent()

// const THRESHOLD = 1
const props = withDefaults(defineProps<Partial<ILegoPreviewComponent>>(), {})
const emits = defineEmits(['transformChange'])
const attr = useAttrs()
// const { class: attrClass, ...other } = useAttrs()

const onDrag = (e: any) => {
  const [deltaX, deltaY] = e.beforeDelta
  emits('transformChange', {
    deltaX: deltaX,
    deltaY: deltaY,
    scaleWidth: 1,
    scaleHeight: 1,
    ...props
  })
}

const onScale = (e: any) => {
  const [scaleX, scaleY] = e.delta
  emits('transformChange', {
    deltaX: 0,
    deltaY: 0,
    scaleWidth: scaleX,
    scaleHeight: scaleY,
    ...props
  })
}

const styleObject = computed(() => {
  return {
    left: `${props.left}px`,
    top: `${props.top}px`,
    width: `${props.width}px`,
    minHeight: '50px'
    // height: `${props.height}px`
  }
})

const componentName = markRaw(props.render)
const renderDirection = ['e', 'se', 's']
</script>

<template>
  <div v-bind="attr">
    <!-- TODO: 优化 添加class样式不该放到该组件 -->
    <component
      :id="props.id"
      :class="[
        props.id === componentStore.currentPreviewComponent?.id
          ? 'border border-colorPrimary'
          : '',
        'absolute hover:border border-colorInfo'
      ]"
      :style="styleObject"
      :is="componentName"
      v-bind="props.configData"
    />
  </div>

  <Moveable
    className="custom-class"
    :target="`#${props.id}`"
    :draggable="true"
    :scalable="true"
    :renderDirections="renderDirection"
    @drag="onDrag"
    @scale="onScale"
  />
</template>

<style>
.moveable-line {
  background: #fff !important;
}

.custom-class {
  z-index: 999 !important;
}
</style>
