<script lang="ts">
import LInput from '../FormComponent/LInput.vue'
import LSelect from '../FormComponent/LSelect.vue'
import LUpload from '../FormComponent/LUpload.vue'

export default {
  components: {
    LInput,
    LSelect,
    LUpload
  }
}
</script>

<script setup lang="ts">
import { userAllComponent } from '@/stores/component'
import type { ILegoComponentConfig } from '@/types/index'
interface Props {
  settings?: Array<ILegoComponentConfig>
}
const props = withDefaults(defineProps<Props>(), {})
const store = userAllComponent()

const handleChange = (item: any, val: any) => {
  store.changePreviewComponentItemProps(store.currentPreviewComponent!.id!, {
    configData: {
      ...store.currentPreviewComponent?.configData,
      [item.key]: val
    }
  })
}
</script>

<template>
  <a-form
    :model="store.currentPreviewComponent?.configData"
    :label-col="{ style: { width: '80px' } }"
    v-if="props.settings?.length"
  >
    <a-form-item
      v-for="(item, index) in props.settings"
      :key="index"
      :label="item.name"
    >
      <component
        :is="item.type"
        :value="store.currentPreviewComponent!.configData![item.key]"
        v-bind="store.currentPreviewComponent!.configOptions![index]"
        @change="($event: string) => handleChange(item, $event)"
      />
    </a-form-item>
  </a-form>
  <a-empty v-else :description="null" />
</template>
