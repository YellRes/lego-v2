import type { ILegoComponent } from '@/types/index'

export const userAllComponent = defineStore('component', () => {
  // 组件模板
  const allComponentRenderTemplate = import.meta.glob(
    '../page/editor/components/Case/**/*.vue',
    {
      eager: true
    }
  )

  // 组件配置
  const allComponentConfigArr: Array<ILegoComponent> = Object.values(
    import.meta.glob('../page/editor/components/Case/**/schema.ts', {
      eager: true
    })
  ).map((item) => item?.default)

  // 提取组件名称
  const getCompNameReg = /\/([^/]+)\/index\.vue$/

  return {
    componentInfo: Object.keys(allComponentRenderTemplate).reduce(
      (pre, cur) => {
        const matched = cur.match(getCompNameReg)
        debugger
        const currentComponentConfig = allComponentConfigArr.find(
          (item: ILegoComponent) => item.type === matched![1]
        )

        console.log(currentComponentConfig)
        pre.push({
          ...currentComponentConfig,
          render: allComponentRenderTemplate[cur]
        })
        return pre
      },
      []
    )
  }
})
