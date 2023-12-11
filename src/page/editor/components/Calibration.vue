<script setup lang="ts">
import type { MaybeComputedElementRef } from '@vueuse/core'

// 长短刻度的长度
const BASE_HEIGHT = 5
const LARGE_HEIGHT = 8

type PositionEnum = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  position?: PositionEnum
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

const width = ref<number>(0)
const height = ref<number>(50)
const maxLength = ref<number>(0)

const canvasRef = ref<HTMLCanvasElement>()
let canvasOffset = 5

// 当props.position变化后 canvas位置变化
/**
 * canvas ctx翻转后 绘制的文字也同时翻转
 */
const translateCtxByPosition = (ctx: CanvasRenderingContext2D) => {
  switch (props.position) {
    case 'top':
      break

    case 'bottom':
      ctx.translate(0, height.value)
      ctx.scale(1, -1)
      break

    case 'left':
      ctx.scale(1, -1)
      ctx.rotate(-Math.PI * 0.5)
      break
  }
}

// 还原canvas的位置
const resetCtxPosition = (ctx: CanvasRenderingContext2D) => {
  switch (props.position) {
    case 'bottom':
      ctx.scale(1, -1)
      break
    case 'left':
      ctx.rotate(Math.PI * 0.5)
      ctx.scale(1, -1)
      break
  }
}
// canvas的画图方法
const renderCanvas = () => {
  const ctx = canvasRef.value?.getContext('2d')
  if (!ctx) return
  // 旋转画布
  translateCtxByPosition(ctx)
  ctx.clearRect(0, 0, maxLength.value, height.value)
  ctx.translate(canvasOffset, 0)
  ctx.beginPath()
  ctx.moveTo(0, 0)

  let currentLength = 0

  while (currentLength <= maxLength.value - canvasOffset) {
    ctx.lineTo(currentLength, 0)
    let currentY = currentLength % props.markTag ? BASE_HEIGHT : LARGE_HEIGHT
    ctx.lineTo(currentLength, currentY)
    if (!(currentLength % props.markTag)) {
      if (props.position === 'left' || props.position === 'bottom')
        resetCtxPosition(ctx)
      ctx.fillText(
        `${currentLength}`,
        props.position === 'left'
          ? 20
          : currentLength - `${currentLength}`.length * 4,
        props.position === 'left' ? currentLength + 4 : currentY + 10
      )
      if (props.position === 'left' || props.position === 'bottom')
        resetCtxPosition(ctx)
    }

    ctx.moveTo(currentLength, 0)
    currentLength += props.step
  }
  ctx.stroke()
  ctx.closePath()
}

// className
const className = computed(() => {
  let className = ['absolute']

  // ! ml-[${props.offSet}px] 不生效
  if (props.position === 'top') {
    className.push(`ml-[40px]`)
  } else if (props.position === 'left') {
    className.push(`mt-[40px]`)
  }

  return className
})
// 监听父容器的大小
watchEffect(() => {
  const { width: containerWidth, height: containerHeight } = useElementSize(
    props.containerRef
  )
  // 属性值是 top bottom的时候 使用父容器的宽度
  if (props.position === 'top' || props.position === 'bottom') {
    width.value = maxLength.value =
      containerWidth.value - props.offSet > 0
        ? containerWidth.value - props.offSet
        : 0

    height.value = 50
  } else {
    // 其余情况使用高度
    height.value = maxLength.value =
      containerHeight.value - props.offSet
        ? containerHeight.value - props.offSet
        : 0

    width.value = 50
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
    :class="className"
    :width="width"
    :height="height"
  ></canvas>
</template>

<style scoped></style>
