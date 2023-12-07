<script setup lang="ts">
import Calibration from './components/Calibration.vue'

const previewRef = ref()
</script>

<template>
  <div class="bg-white h-[100%] relative" ref="previewRef">
    <Calibration :container-ref="previewRef" :step="10" :mark-tag="100" />
  </div>
</template>
