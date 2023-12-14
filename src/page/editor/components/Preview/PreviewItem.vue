<script setup lang="ts">
import Moveable from 'vue3-moveable'
import { ILegoPreviewComponent } from '@/types/index'
const props = withDefaults(defineProps<ILegoPreviewComponent>(), {})

const onDrag = (e) => {
  e.target.style.transform = e.transform
}
const onScale = (e) => {
  e.target.style.transform = e.drag.transform
}
const onRotate = () => {}

const styleObject = computed(() => {
  return {
    left: `${props.left}px`,
    top: `${props.top}px`
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
    :rotatable="true"
    @drag="onDrag"
    @scale="onScale"
    @rotate="onRotate"
  />
</template>
