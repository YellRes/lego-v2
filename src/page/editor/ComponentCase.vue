<script setup lang="ts">
import { userAllComponent } from '@/stores/component.ts'
const searchVal = ref<string>('')
const handleSearch = () => {}

const store = userAllComponent()
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
      <div v-for="(item, index) in store.componentInfo" :key="index">
        {{ item.name }}
      </div>
    </a-tab-pane>
  </a-tabs>
</template>
