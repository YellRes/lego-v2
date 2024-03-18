import { ILegoPreviewComponent } from '@/types/index'

/**
 * 判断点是否在编辑器中的图形内
 * @params point 点的坐标
 * @params componentArr 编辑器中所有的组件
 * @return 当前点在组件中则返回对应组件，没有就是null
 * */
export function isPointInEditorComponent(
  point: { x: number; y: number },
  componentArr: Array<ILegoPreviewComponent & Record<string, any>>
): ILegoPreviewComponent | null {
  // const deltaX = point.x - 50 < 0 ? 0 : point.x - 50
  const deltaY = point.y - 50 < 0 ? 0 : point.y - 50

  for (let i = 0; i < componentArr.length; i++) {
    const component = componentArr[i]
    const { top, height } = component
    if (deltaY > top && deltaY < top + height) {
      return component
    }
  }
  return null
}
