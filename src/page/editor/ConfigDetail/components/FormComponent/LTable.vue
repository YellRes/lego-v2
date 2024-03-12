<script lang="ts">
export default {
  name: 'LTable'
}
</script>

<script setup lang="ts">
// import { PlusOutlined } from '@ant-design/icons-vue'
import { cloneDeep } from 'lodash-es'
const attr = useAttrs()

interface Props {
  value: Array<any>
}
const props = withDefaults(defineProps<Props>(), {
  value: () => []
})

const emits = defineEmits(['change'])

const _value = computed({
  set(val) {
    emits('change', val)
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
const editableData = ref<any>({})

const edit = (key: string) => {
  editableData.value[key] = cloneDeep(
    _value.value.filter((item: any) => key === item.key)[0]
  )
}
const save = (key: string) => {
  Object.assign(
    _value.value.filter((item: any) => key === item.key)[0],
    editableData.value[key]
  )
  _value.value = [..._value.value]
  delete editableData.value[key]
}
const cancel = (key: string) => {
  delete editableData.value[key]
}

const getTableDataItem = () =>
  attr!.table!.columns.reduce(
    (pre, cur) => {
      pre[cur.key] = ''
      return pre
    },
    {
      key: (Array.isArray(_value.value) ? _value.value : []).length
    }
  )
const addNewLine = () => {
  _value.value = [..._value.value, getTableDataItem()]
  // console.log(
  //   [..._value.value, getTableDataItem()],
  //   ' [..._value.value, getTableDataItem()]'
  // )
}
const onDelete = (key: string) => {
  _value.value = _value.value.filter((item) => item.key !== key)
}

const handleOk = () => {
  emits('change', _value.value)
  open.value = false
}
</script>

<template>
  <!-- TODO: 很多的组件类型如何 如何配置它们的类型定义 -->
  <a-button type="primary" @click="openModal">编辑数据源</a-button>
  <a-modal v-model:open="open" title="编辑数据源" :width="900" @ok="handleOk">
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

    <a-table bordered :dataSource="_value" :columns="attr?.table?.columns">
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.dataIndex !== 'operation'">
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][column.dataIndex]"
            />

            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>

        <template v-else>
          <div v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)" class="mr-4"
              >保存</a-typography-link
            >
            <a-popconfirm title="确定退出?" @confirm="cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </div>

          <div v-else>
            <a @click="edit(record.key)" class="mr-4">编辑</a>
            <a-popconfirm title="确认删除?" @confirm="onDelete(record.key)">
              <a>删除</a>
            </a-popconfirm>
          </div>
        </template>
      </template>
    </a-table>
  </a-modal>
</template>
