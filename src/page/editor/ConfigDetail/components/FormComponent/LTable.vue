<script lang="ts">
export default {
  name: 'LTable'
}
</script>

<script setup lang="ts">
// import { PlusOutlined } from '@ant-design/icons-vue'
const attr = useAttrs()

interface Props {
  value?: Array<any>
}
const props = withDefaults(defineProps<Props>(), {
  value: () => []
})

const emits = defineEmits(['update:value'])

const _value = computed({
  set(val) {
    emits('update:value', val)
  },
  get() {
    return props.value
  }
})

const open = ref<boolean>(false)
const openModal = () => {
  open.value = true
}

// a-table
const getTableDataItem = () =>
  attr!.table!.columns.reduce((pre, cur) => {
    pre[cur.key] = ''
    return pre
  }, {})
const addNewLine = () => {
  console.log(getTableDataItem(), 'getTableDataItem')
  _value.value.push(getTableDataItem())
  // TODO: why this is not work?
  // _value.value = [..._value.value, getTableDataItem()]
  // console.log(
  //   [..._value.value, getTableDataItem()],
  //   ' [..._value.value, getTableDataItem()]'
  // )
  console.log(_value.value, '_value.value')
}
const onDelete = (key) => {
  // _value.value = _value.value.filter((item) => item.key !== key)
}

// const inputRef = ref<any>(null)
// const inputValue = ref<string>('')
// const inputVisible = ref<boolean>(false)
// // const tags = ref<Array<string>>()
// const showInput = async () => {
//   inputVisible.value = true
//   await nextTick()
//   inputRef.value.focus()
// }
// const handleInputConfirm = () => {}
</script>

<template>
  <!-- TODO: 很多的组件类型如何 如何配置它们的类型定义 -->
  <a-button type="primary" @click="openModal">编辑数据源</a-button>
  <a-modal v-model:open="open" title="编辑数据源" :width="800" :zIndex="10000">
    <a-row justify="space-between mb-4">
      <!-- <div>
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
      </div> -->

      <a-button type="primary" @click="addNewLine">添加</a-button>
    </a-row>
    {{ _value }}
    <a-table bordered :dataSource="_value" :columns="attr?.table?.columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
          <a-popconfirm title="确认删除?" @confirm="onDelete(record.key)">
            <a>删除</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </a-modal>
</template>
