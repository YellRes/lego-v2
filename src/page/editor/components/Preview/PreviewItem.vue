<script setup lang="ts">
import Moveable from 'vue3-moveable'
import { ILegoPreviewComponent } from '@/types/index'
const props = withDefaults(defineProps<ILegoPreviewComponent>(), {})

const onDrag = () => {}
const onScale = () => {}
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
    v-bind:target="`#${props.id}`"
    v-bind:draggable="true"
    v-bind:scalable="true"
    v-bind:rotatable="true"
    @drag="onDrag"
    @scale="onScale"
    @rotate="onRotate"
  />
</template>
