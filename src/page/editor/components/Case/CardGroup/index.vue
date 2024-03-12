<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import type { ICardGroups } from '../type'

const props = withDefaults(defineProps<ICardGroups>(), {
  title: '',
  avatar: '',
  cardList: () => []
})
</script>

<template>
  <div class="w-full">
    <div class="flex items-center">
      <SvgIcon :name="props.avatar || 'name'" class="w-[24px] h-[24px] mr-2" />
      <span class="text-xl">{{ props.title || '标题' }}</span>
    </div>

    <!-- <div class="card-container"> -->
    <a-row :gutter="{ xs: 8, sm: 16, md: 24 }">
      <a-col
        v-for="(item, index) in props.cardList"
        class="my-4"
        :key="index"
        :xs="12"
        :sm="8"
        :md="6"
        :xl="4"
      >
        <a-card hoverable :bodyStyle="{ padding: '8px' }">
          <div>
            <!-- <div>
                <img src="" alt="" />
              </div> -->
            <div>
              <div class="text-base font-bold truncate">
                {{ item.title }}
              </div>
              <div class="text-xs truncate">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <!-- </div> -->
  </div>
</template>
