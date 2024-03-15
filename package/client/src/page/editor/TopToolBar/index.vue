<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { savePageRequest } from '../api'
import { userAllComponent } from '@/stores/component'
import { useRouter } from 'vue-router'

const emits = defineEmits(['preview'])
const router = useRouter()
const store = userAllComponent()

const back = () => {}

const saveBtnLoading = ref(false)
const save = async () => {
  saveBtnLoading.value = true

  try {
    await savePageRequest({
      // TODO: 先写死
      userId: 1,
      pageItem: store.currentPreviewComponentArr.map((item) => {
        const { render, ...other } = item
        return other
      })
    })
  } catch (e) {
    console.log(e)
  }

  saveBtnLoading.value = false
  router.push('/index')
}
const confirm = () => {
  router.push('/index')
}
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
      <a-button class="mr-4">返回</a-button>
    </a-popconfirm>

    <a-tooltip placement="bottom">
      <template #title>保存页面并发布</template>
      <!-- <a-typography-link @click="save"> 保存 </a-typography-link> -->
      <a-button type="primary" @click="save" :loading="saveBtnLoading">
        保存
      </a-button>
    </a-tooltip>

    <div class="ml-6">
      <a @click="preview"><SvgIcon name="preview" /></a>
    </div>
  </div>
</template>
