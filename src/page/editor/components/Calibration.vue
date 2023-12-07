<script setup lang="ts">
import type { MaybeComputedElementRef } from '@vueuse/core'
interface Props {
  position?: 'top' | 'bottom' | 'left' | 'right'
  step?: number
  containerRef?: MaybeComputedElementRef
  markTag?: number
  offSet?: number
}

// 长短刻度的长度
const BASE_HEIGHT = 10
const LARGE_HEIGHT = 20
const props = withDefaults(defineProps<Props>(), {
  step: 10,
  markTag: 100,
  offSet: 50,
  position: 'top',
  containerRef: null
})

const maxLength = ref<number>(0)
// const canvasHeight = ref<number>(0)
// const canvasWidth = ref<number>(0)
const height = 50

// const allCalibrationArr = ref<Array<{ value: number; isLongLength: boolean }>>(
//   []
// )
const canvasRef = ref<HTMLCanvasElement>()
// 如何根据 maxSize 画出刻度线
const renderCanvas = () => {
  const ctx = canvasRef.value?.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, maxLength.value, height)
  ctx.beginPath()
  ctx.moveTo(0, 0)

  let currentLength = 0

  while (currentLength <= maxLength.value) {
    ctx.lineTo(currentLength, 0)

    let currentY = currentLength % props.markTag ? BASE_HEIGHT : LARGE_HEIGHT
    ctx.lineTo(currentLength, currentY)
    if (!(currentLength % props.markTag)) {
      ctx.fillText(
        `${currentLength}`,
        currentLength - `${currentLength}`.length * 4,
        currentY + 10
      )
    }

    ctx.moveTo(currentLength, 0)
    currentLength += props.step
  }
  ctx.stroke()
  ctx.closePath()
}
watchEffect(() => {
  const { width, height } = useElementSize(props.containerRef)
  if (props.position === 'top' || props.position === 'bottom') {
    maxLength.value =
      width.value - props.offSet > 0 ? width.value - props.offSet : 0
  } else {
    maxLength.value =
      height.value - props.offSet ? height.value - props.offSet : 0
  }
})

watchEffect(
  () => {
    renderCanvas()
  },
  {
    // TODO: 必须加上post 不然不生效
    // watchEffect 默认在组件更新前执行 但canvas的绘制方法要放到组件更新后执行
    flush: 'post'
  }
)
</script>

<template>
  <canvas
    id="canvasDom"
    ref="canvasRef"
    :width="maxLength"
    :height="height"
  ></canvas>
</template>

<style scoped></style>
