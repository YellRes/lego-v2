<script setup lang="ts">
import Case from './ComponentCase.vue'
import ConfigDetail from './ConfigDetail/index.vue'
import Preview from './Preview/index.vue'
const commonStyle = {
  background: 'transparent',
  border: '1px solid #ededed'
}

const siderWidth = 300
</script>

<template>
  <a-style-provider hash-priority="high">
    <a-layout class="h-[100%]" :style="commonStyle">
      <a-layout-header :style="commonStyle" class="h-[60px]"></a-layout-header>

      <a-layout>
        <a-layout-sider
          class="h-[100%] p-[8px]"
          :style="{
            ...commonStyle,
            height: 'calc(100vh - 60px)'
          }"
          :width="siderWidth"
        >
          <Case />
        </a-layout-sider>

        <a-layout-content class="h-[100%]" :style="commonStyle">
          <Preview />
        </a-layout-content>

        <a-layout-sider
          class="h-[100%]"
          :style="commonStyle"
          :width="siderWidth"
        >
          <ConfigDetail />
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </a-style-provider>
</template>

<style scoped></style>
