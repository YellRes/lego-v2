<script setup lang="ts">
const commonStyle = {
  background: 'transparent',
  border: '1px solid #ededed'
}

const siderWidth = 400
</script>

<template>
  <a-style-provider hash-priority="high">
    <a-layout class="h-[100%]" :style="commonStyle">
      <a-layout-header :style="commonStyle"></a-layout-header>

      <a-layout>
        <a-layout-sider
          class="h-[100%]"
          :style="commonStyle"
          :width="siderWidth"
        ></a-layout-sider>

        <a-layout-content
          class="h-[100%]"
          :style="commonStyle"
        ></a-layout-content>

        <a-layout-sider
          class="h-[100%]"
          :style="commonStyle"
          :width="siderWidth"
        ></a-layout-sider>
      </a-layout>
    </a-layout>
  </a-style-provider>
</template>

<style scoped></style>
