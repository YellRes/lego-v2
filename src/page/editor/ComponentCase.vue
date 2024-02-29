<script setup lang="ts">
import { userAllComponent } from '@/stores/component.ts'
import { v4 } from 'uuid'
import Draggable from 'vuedraggable'

const searchVal = ref<string>('')
const handleSearch = () => {}

const store = userAllComponent()
const getComponentData = () => {
  return {
    onStart(dragEvent: Record<string, unknown>) {
      const { oldIndex } = dragEvent

      store.changeCurrentPreviewComProps({
        ...store.componentInfo[oldIndex as number],
        id: 'lego' + v4().replace(/-/g, '')
      })
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
      <Draggable
        v-model="store.componentInfo"
        group="component"
        item-key="type"
        :move="() => false"
        :component-data="getComponentData()"
      >
        <template #item="{ element }">
          <a-card>{{ element.name }}</a-card>
        </template>
      </Draggable>
    </a-tab-pane>
  </a-tabs>
</template>
