import type { ILegoComponent, ILegoPreviewComponent } from '@/types/index'

// 组件模板
const allComponentRenderTemplate = import.meta.glob(
  '../page/editor/components/Case/**/*.vue',
  {
    eager: true
  }
) as any

// 组件配置
const allComponentConfigArr: Array<ILegoComponent> = Object.values(
  import.meta.glob('../page/editor/components/Case/**/schema.ts', {
    eager: true
  })
).map((item: any) => item?.default)

// 提取组件名称
const getCompNameReg = /\/([^/]+)\/index\.vue$/

export const userAllComponent = defineStore('component', () => {
  const currentPreviewComponentArr = ref<
    Partial<ILegoPreviewComponent & ILegoComponent>[]
  >([])
  // 添加组件
  function addPreviewComponentArr(
    val: Partial<ILegoPreviewComponent & ILegoComponent>
  ) {
    currentPreviewComponentArr.value.push(val)
  }

  // 删除组件
  function deletePreviewComponentItem(id: string) {
    currentPreviewComponentArr.value = currentPreviewComponentArr.value.filter(
      (item) => item.id !== id
    )
  }

  // 修改组件信息
  function changePreviewComponentItemProps(
    id: string,
    val: Partial<ILegoPreviewComponent & ILegoComponent>
  ) {
    const currentPreviewComponent = currentPreviewComponentArr.value.find(
      (item) => item.id === id
    )
    currentPreviewComponent && Object.assign(currentPreviewComponent, val)
    changeCurrentPreviewCom(currentPreviewComponent!)
  }

  // 当前使用的component
  const currentPreviewComponent =
    ref<Partial<ILegoPreviewComponent & ILegoComponent>>()
  function changeCurrentPreviewCom(
    val: Partial<ILegoPreviewComponent & ILegoComponent>
  ) {
    currentPreviewComponent.value = val
  }

  return {
    // 所有组件信息
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
    changePreviewComponentItemProps,
    // case
    currentPreviewComponentArr,
    currentPreviewComponent,
    changeCurrentPreviewCom
  }
})
