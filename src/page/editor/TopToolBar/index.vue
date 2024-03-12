<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

const emits = defineEmits(['preview'])

const back = () => {}
const save = () => {}
const confirm = () => {}
const preview = () => {
  emits('preview')
}
</script>

<template>
  <div class="flex items-center h-full">
    <a-popconfirm
      title="当前可能存在未保存的内容,确定离开此页面?"
      @confirm="confirm"
    >
      <!-- <a href="#" @click="back">返回</a> -->
      <a-button @click="back" class="mr-4">返回</a-button>
    </a-popconfirm>

    <a-tooltip placement="bottom">
      <template #title>保存页面并发布</template>
      <!-- <a-typography-link @click="save"> 保存 </a-typography-link> -->
      <a-button type="primary" @click="save">保存</a-button>
    </a-tooltip>

    <div class="ml-6">
      <a href="#" @click="preview"><SvgIcon name="preview" /></a>
    </div>
  </div>
</template>
