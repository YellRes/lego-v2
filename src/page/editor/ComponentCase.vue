<script setup lang="ts">
import { userAllComponent } from '@/stores/component.ts'
import draggable from 'vuedraggable'

const searchVal = ref<string>('')
const handleSearch = () => {}

const store = userAllComponent()
const getComponentData = () => {
  return {
    on: {
      end() {}
    }
  }
}
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
      <draggable
        v-model="store.componentInfo"
        group="component"
        item-key="type"
        :move="() => false"
        :component-data="getComponentData()"
      >
        <template #item="{ element }">
          <a-card>{{ element.name }}</a-card>
        </template>
      </draggable>
    </a-tab-pane>
  </a-tabs>
</template>
