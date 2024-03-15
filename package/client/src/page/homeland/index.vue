<script setup lang="ts">
import { getAllPageRequest } from './api'
import Container from './components/Container.vue'

const pageList = ref<Array<{ name: string; imgUrl: string }>>([])
onMounted(async () => {
  try {
    const data = (await getAllPageRequest()) as any
    pageList.value = data || []
  } catch (e) {
    pageList.value = []
    console.log(e)
  }
})
</script>

<template>
  <div class="flex justify-center">
    <Container
      :title="'我的应用'"
      :linkText="'查看所有的应用'"
      :pageList="pageList"
      class="w-[800px]"
    />
  </div>
</template>
