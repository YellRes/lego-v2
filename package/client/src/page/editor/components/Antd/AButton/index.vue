<script setup lang="ts">
import type { ButtonProps } from 'ant-design-vue'

const props = withDefaults(
  defineProps<Partial<ButtonProps & { content: string }>>(),
  {}
)
</script>

<template>
  <a-button v-bind="props">{{ props.content || '按钮' }}</a-button>
</template>
