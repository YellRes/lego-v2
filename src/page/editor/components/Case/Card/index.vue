<script lang="ts" setup>
// import type { } from '@/types/index'
interface IPreviewCard {
  imageUrl?: string
  title?: string
  content?: string
}
const props = withDefaults(defineProps<IPreviewCard>(), {
  imageUrl: '',
  title: '',
  content: ''
})
</script>

<template>
  <!-- <a-tooltip placement="bottom">
    <template #title>
      {{ props.content }}
    </template> -->
  <div class="shadow-lg flex justify-between p-[4px]">
    <img :src="props.imageUrl" class="w-[30px] h-[30px]" />
    <div class="flex flex-col m-[4px]">
      <span class="text-ellipsis overflow-hidden text-lg">{{
        props.title
      }}</span>
      <span class="text-ellipsis overflow-hidden">
        {{ props.content }}
      </span>
    </div>
  </div>
  <!-- </a-tooltip> -->
</template>
