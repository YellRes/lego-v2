<script setup lang="ts">
import Calibration from './components/Calibration.vue'
const previewRef = ref(null)
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
  </div>
</template>
