<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import type { ICardGroups } from '../type'

const props = withDefaults(defineProps<ICardGroups>(), {
  title: '',
  avatar: '',
  children: () => []
})
</script>

<template>
  <div class="w-full">
    <div class="flex">
      <SvgIcon :name="props.avatar || 'name'" class="w-[24px] h-[24px]" />
      <span class="text-xl">{{ props.title || '标题' }}</span>
    </div>

    <div class=""></div>
  </div>
</template>
