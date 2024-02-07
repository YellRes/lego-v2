<script lang="ts" setup>
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
  <div class="shadow-lg flex justify-between">
    <img :src="props.imageUrl" class="w-[30px] h-[30px]" alt="" />
    <div class="flex-col">
      <span class="text-ellipsis overflow-hidden text-lg">{{
        props.title
      }}</span>
      <span class="text-ellipsis overflow-hidden">
        {{ props.content }}
      </span>
    </div>
  </div>
</template>
