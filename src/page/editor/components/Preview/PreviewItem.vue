<script setup lang="ts">
import Moveable from 'vue3-moveable'
import { ILegoPreviewComponent } from '@/types/index'

const THRESHOLD = 0.5
const props = withDefaults(defineProps<ILegoPreviewComponent>(), {})
const emits = defineEmits(['transformChange'])

const onDrag = (e) => {
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

const onScale = useThrottleFn((e) => {
  console.log(e)
  const [scaleX, scaleY] = e.delta
  emits('transformChange', {
    deltaX: 0,
    deltaY: 0,
    scaleWidth: scaleX,
    scaleHeight: scaleY,
    ...props
  })
}, 500)

const styleObject = computed(() => {
  return {
    left: `${props.left}px`,
    top: `${props.top}px`,
    width: `${props.width}px`,
    height: `${props.height}px`
  }
})
</script>

<template>
  <div :id="props.id" :class="`absolute `" :style="styleObject">
    {{ props.name }}
  </div>

  <Moveable
    className="moveable"
    :target="`#${props.id}`"
    :draggable="true"
    :scalable="true"
    :throttleDrag="THRESHOLD"
    :throttleScale="THRESHOLD"
    @drag="onDrag"
    @scale="onScale"
  />
</template>
