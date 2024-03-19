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

      store.changeCurrentPreviewCom({
        ...store.componentInfo[oldIndex as number],
        id: 'lego' + v4().replace(/-/g, '')
      })
    }
  }
}

const activeKey = ref<string>('1')
const componentArr = computed(() => {
  return [
    store.componentInfo.filter((item: any) => !item.type.startsWith('A')),
    store.componentInfo.filter((item: any) => item.type.startsWith('A'))
  ]
})
</script>

<template>
  <a-input-search
    class="mb-4"
    v-model:value="searchVal"
    placeholder="查找组件"
    enter-button
    @search="handleSearch"
  />
  <a-tabs tab-position="left" v-model:activeKey="activeKey">
    <a-tab-pane tab="普通" key="1">
      <!-- 所有的可用组件 -->
      <Draggable
        v-model="componentArr[0]"
        :group="{ name: 'canvas', pull: 'clone', put: false }"
        item-key="type"
        :move="() => false"
        :component-data="getComponentData()"
      >
        <template #item="{ element }">
          <a-card>{{ element.name }}</a-card>
        </template>
      </Draggable>
    </a-tab-pane>

    <a-tab-pane tab="组件库" key="2">
      <!-- 所有的可用组件 -->
      <Draggable
        v-model="componentArr[1]"
        :group="{ name: 'canvas', pull: 'clone', put: false }"
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
