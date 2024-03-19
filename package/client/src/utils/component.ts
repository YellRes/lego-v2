import type { ILegoComponent } from '@/types/index'

// 组件模板
export const allComponentRenderTemplate = import.meta.glob(
  '@/page/editor/components/*/**/*.vue',
  {
    eager: true
  }
) as any

// 组件配置
export const allComponentConfigArr: Array<ILegoComponent<any>> = Object.values(
  import.meta.glob('@/page/editor/components/*/**/schema.ts', {
    eager: true
  })
).map((item: any) => item?.default)
