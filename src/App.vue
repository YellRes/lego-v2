<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import Editor from './page/editor/index.vue'
</script>

<template>
  <a-config-provider :locale="zhCN">
    <Editor />
  </a-config-provider>
</template>

<style scoped></style>
