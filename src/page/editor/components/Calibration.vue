<script setup lang="ts">
import type { MaybeComputedElementRef } from '@vueuse/core'

// 长短刻度的长度
const BASE_HEIGHT = 10
const LARGE_HEIGHT = 20
interface Props {
  position?: 'top' | 'bottom' | 'left' | 'right'
  step?: number
  containerRef?: MaybeComputedElementRef
  markTag?: number
  offSet?: number
}

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
let canvasOffset = 10
// canvas的画图方法
const renderCanvas = () => {
  const ctx = canvasRef.value?.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, maxLength.value, height)
  ctx.translate(canvasOffset, 0)
  ctx.beginPath()
  ctx.moveTo(0, 0)

  let currentLength = 0

  while (currentLength <= maxLength.value - canvasOffset) {
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

// 监听父容器的大小
watchEffect(() => {
  const { width, height } = useElementSize(props.containerRef)
  // 属性值是 top bottom的时候 使用父容器的宽度
  if (props.position === 'top' || props.position === 'bottom') {
    maxLength.value =
      width.value - props.offSet > 0 ? width.value - props.offSet : 0
  } else {
    // 其余情况使用高度
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
