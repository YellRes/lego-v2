<script setup lang="ts">
const searchVal = ref<string>('')
const handleSearch = () => {}
</script>

<template>
  <a-tabs tab-position="left">
    <a-tab-pane tab="普通">
      <a-input-search
        v-model:value="searchVal"
        placeholder="查找组件"
        enter-button
        @search="handleSearch"
      />

      <!-- 所有的可用组件 -->
    </a-tab-pane>
  </a-tabs>
</template>
