<script setup lang="ts">
interface IRightClickMenuOptionItem {
  label: string
  eventName: string
}
interface IRightClickMenu {
  container: HTMLElement | null
  options: Array<IRightClickMenuOptionItem>
}

// const MENU_WIDTH = 100
const props = withDefaults(defineProps<IRightClickMenu>(), {
  container: null,
  options: () => []
})
const emits = defineEmits(['clickMenuItem'])

const isShow = ref<boolean>(false)
const rightClickMenuRef = ref<HTMLElement | null>(null)
const handleContextMenuClick = (e: IRightClickMenuOptionItem) => {
  isShow.value = false
  emits('clickMenuItem', e)
}

watch(
  () => props.container,
  () => {
    useEventListener(props.container, 'contextmenu', async (e: MouseEvent) => {
      e.preventDefault()
      isShow.value = true
      await nextTick()
      if (!rightClickMenuRef.value || !props.container) return
      // 右击点到弹框后 不触发事件

      const { clientX, clientY } = e
      // 容器的左上角坐标
      const { offsetTop, offsetLeft } = props.container
      // 弹出菜单的宽高
      const { clientHeight, clientWidth } = rightClickMenuRef.value

      // 鼠标在prop.container中的位置
      const offsetX = clientX - offsetLeft
      const offsetY = clientY - offsetTop
      // 判断边界
      rightClickMenuRef.value.style.top = `${
        offsetY + clientHeight > props.container.clientHeight
          ? offsetY - clientHeight
          : offsetY
      }px`
      rightClickMenuRef.value.style.left = `${
        offsetX + clientWidth > props.container.clientWidth
          ? offsetX - clientWidth
          : offsetX
      }px`
    })
  }
)

onClickOutside(rightClickMenuRef, () => (isShow.value = false))
</script>

<template>
  <div
    v-if="isShow"
    :class="`w-[100px] absolute shadow-md bg-white z-[4000]`"
    ref="rightClickMenuRef"
    @blur="isShow = false"
  >
    <div
      class="p-[10px] hover:bg-sky-200"
      v-for="(item, index) in props.options"
      @click.stop="() => handleContextMenuClick(item)"
      :key="index"
    >
      {{ item.label }}
    </div>
  </div>
</template>
