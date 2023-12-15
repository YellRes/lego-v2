import type { ILegoComponent, ILegoPreviewComponent } from '@/types/index'

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
  ).map((item: any) => item?.default)

  // 提取组件名称
  const getCompNameReg = /\/([^/]+)\/index\.vue$/

  const currentPreviewComponentArr = ref<ILegoPreviewComponent[]>([])
  // 添加组件
  function addPreviewComponentArr(val: ILegoPreviewComponent) {
    currentPreviewComponentArr.value.push(val)
  }
  // 删除组件
  function deletePreviewComponentItem(id: string) {
    currentPreviewComponentArr.value = currentPreviewComponentArr.value.filter(
      (item) => item.id !== id
    )
  }
  // 修改组件信息
  function changePreviewComponentItem(
    id: string,
    val: Partial<ILegoPreviewComponent>
  ) {
    const previewComponent = currentPreviewComponentArr.value.find(
      (item) => item.id === id
    )

    previewComponent && Object.assign(previewComponent, val)
  }
  // 当前使用的component
  const currentPreviewComponent = ref<ILegoPreviewComponent>()
  function changeCurrentPreviewComponent(val: ILegoPreviewComponent) {
    currentPreviewComponent.value = val
  }

  return {
    componentInfo: Object.keys(allComponentRenderTemplate).reduce(
      (pre, cur) => {
        const matched = cur.match(getCompNameReg)

        const currentComponentConfig = allComponentConfigArr.find(
          (item: ILegoComponent) => item.type === matched![1]
        )

        currentComponentConfig &&
          pre.push({
            ...currentComponentConfig,
            render: markRaw(allComponentRenderTemplate[cur]!.default)
          })
        return pre
      },
      [] as ILegoComponent[]
    ),
    // preview
    addPreviewComponentArr,
    deletePreviewComponentItem,
    changePreviewComponentItem,
    // case
    currentPreviewComponentArr,
    currentPreviewComponent,
    changeCurrentPreviewComponent
  }
})
