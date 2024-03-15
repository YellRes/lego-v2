<script setup lang="ts">
import type { IParagraph } from '../type'
const props = withDefaults(defineProps<IParagraph>(), {
  title: ''
})
</script>

<template>
  <p class="w-full flex justify-center items-center">{{ props.title }}</p>
</template>
