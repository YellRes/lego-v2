<script setup lang="ts">
interface IRightClickMenu {
  container: HTMLElement | null
  options: Array<{
    label: string
    eventName: string
  }>
}

// const MENU_WIDTH = 100
const props = withDefaults(defineProps<IRightClickMenu>(), {
  container: null,
  options: () => []
})

// const { x, y } = useMouseInElement(props.container)
// useEventListener(props.container, '')
</script>

<template>
  <div :class="`w-[200px] absolute`">
    <a-list :data-source="props.options">
      <template #renderItem="{ item }">
        <a-card size="small">
          {{ item.label }}
        </a-card>
      </template>
    </a-list>
  </div>
</template>
