<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon/index.vue'

interface Props {
  title: string
  linkText: string
  pageList: Array<{
    name: string
    imgUrl: string
  }>
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  title: '',
  linkText: '',
  pageList: () => []
})

const router = useRouter()
</script>

<template>
  <div>
    <a-row justify="space-between">
      <span>{{ props.title }}</span>

      <span class="flex items-center"
        >{{ props.linkText }} <SvgIcon name="arrowRight"
      /></span>
    </a-row>

    <a-row class="mt-4">
      <div
        @click="() => router.push('/editPage')"
        class="h-[150px] w-[150px] rounded bg-gray-300 flex flex-col items-center justify-center cursor-pointer mr-4"
      >
        <PlusOutlined />
        开始创建应用
      </div>

      <div
        class="h-[150px] w-[150px] rounded bg-gray-300 flex flex-col items-center justify-center cursor-pointer0 mr-4"
        v-for="(item, index) in props.pageList"
        @click="
          () => router.push({ path: '/editPage', query: { id: item.id } })
        "
        :key="index"
      ></div>
    </a-row>
  </div>
</template>
