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
  <div class="shadow-lg flex flex-col">
    <div class="text-lg truncate">
      {{ props.title }}
    </div>
    <div class="truncate">
      {{ props.content }}
    </div>
  </div>
</template>
