<script setup lang="ts">
import Moveable from 'vue3-moveable'
import { ILegoPreviewComponent } from '@/types/index'

// const THRESHOLD = 1
const props = withDefaults(defineProps<ILegoPreviewComponent>(), {})
const emits = defineEmits(['transformChange'])

const onDrag = (e: any) => {
  console.log(e)
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
  console.log(e)
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
    height: `${props.height}px`
  }
})

const componentName = markRaw(props.render)
</script>

<template>
  <component
    :is="componentName"
    v-bind="props.configData"
    :id="props.id"
    :class="`absolute`"
    :style="styleObject"
  />

  <Moveable
    className="moveable"
    :target="`#${props.id}`"
    :draggable="true"
    :scalable="true"
    @drag="onDrag"
    @scale="onScale"
  />
</template>
