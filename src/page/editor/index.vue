<script setup lang="ts">
import Case from './ComponentCase.vue'
import ConfigDetail from './ConfigDetail/index.vue'
import Preview from './Preview/index.vue'
import TopToolBar from './TopToolBar/index.vue'
import PreviewPage from '@/page/preview/index.vue'
import { userAllComponent } from '@/stores/component'

const commonStyle = {
  background: 'transparent',
  border: '1px solid #ededed'
}
const siderWidth = 300

const store = userAllComponent()

const open = ref<boolean>(false)

onMounted(() => {
  store.initPreviewComponentArr()
})
</script>

<template>
  <a-style-provider hash-priority="high">
    <a-layout class="h-[100%]" :style="commonStyle">
      <a-layout-header :style="commonStyle" class="h-[60px]">
        <TopToolBar @preview="open = true" />
      </a-layout-header>

      <a-layout>
        <a-layout-sider
          class="h-[100%] p-[8px]"
          :style="{
            ...commonStyle,
            height: 'calc(100vh - 60px)'
          }"
          :width="siderWidth"
        >
          <Case />
        </a-layout-sider>

        <a-layout-content class="h-[100%]" :style="commonStyle">
          <Preview />
        </a-layout-content>

        <a-layout-sider
          class="h-[100%]"
          :style="commonStyle"
          :width="siderWidth"
        >
          <ConfigDetail />
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </a-style-provider>

  <a-modal v-model:open="open" title="预览" :footer="null" width="800px">
    <PreviewPage :component-data="store.currentPreviewComponentArr" />
  </a-modal>
</template>

<style scoped></style>
