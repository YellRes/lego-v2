<script lang="ts">
export default {
  name: 'LTable'
}
</script>

<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
const attr = useAttrs()
const open = ref<boolean>(false)
const openModal = () => {
  open.value = true
}

const inputRef = ref<any>(null)
const inputValue = ref<string>('')
const inputVisible = ref<boolean>(false)
const tags = ref<Array<string>>()
const showInput = async () => {
  inputVisible.value = true
  await nextTick()
  inputRef.value.focus()
}
</script>

<template>
  <!-- TODO: 很多的组件类型如何 如何配置它们的类型定义 -->
  <a-button type="primary" @click="openModal">编辑数据源</a-button>
  <a-modal v-model:open="open" title="编辑数据源" :width="800" :zIndex="10000">
    <a-row justify="space-between mb-4">
      <div>
        <template v-for="(tag, index) in tags" :key="index">
          <a-tag>{{ tag }}</a-tag>
        </template>

        <a-input
          v-if="inputVisible"
          ref="inputRef"
          v-model:value="inputValue"
          :style="{ width: '78px' }"
          @blur="handleInputConfirm"
          @keyup.enter="handleInputConfirm"
        />

        <a-tag v-else @click="showInput"></a-tag>
      </div>

      <a-button type="primary">添加</a-button>
    </a-row>
    <a-table bordered :dataSource="dataSource" :columns="attr.columns">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'operation'">
          <a-popconfirm
            v-if="dataSource.length"
            title="确认删除?"
            @confirm="onDelete(record.key)"
          >
            <a>删除</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </a-modal>
</template>
