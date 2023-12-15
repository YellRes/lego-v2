import { ILegoPreviewComponent } from '@/types/index'

/**
 * 判断点是否在编辑器中的图形内
 * @params point 点的坐标
 * @params componentArr 编辑器中所有的组件
 * @return 当前点在组件中则返回对应组件，没有就是null
 * */
export function isPointInEditorComponent(
  point: { x: number; y: number },
  componentArr: ILegoPreviewComponent[]
): ILegoPreviewComponent | null {
  for (let i = 0; i < componentArr.length; i++) {
    const component = componentArr[i]
    const { top, left, width, height } = component
    if (
      point.x > left &&
      point.x < left + width &&
      point.y > top &&
      point.y < top + height
    ) {
      return component
    }
  }
  return null
}
