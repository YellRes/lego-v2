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
</script>

<template>
  <div
    :id="props.id"
    :class="`absolute top-[${props.top || 0}px] left-[${props.left || 0}px]`"
  >
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
