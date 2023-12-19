// 定义组件详情配置
export interface ILegoComponentConfig<T> {
  name: string
  field: keyof T
  type: string
}

// 定义组件类型
/**
 * TODO: IComponent.config的类型 是 IComponent.configData 数组中 IComponentConfig.key的集合
 * */
export interface ILegoComponent<T> {
  name: string
  field: string
  type: string
  configOptions: Array<IComponentConfig<T>>
  configData: T
  render: any
}

// 预览组件类型
export interface ILegoPreviewComponent extends ILegoComponent<T> {
  top: number
  left: number
  width: number
  height: number
  id: string
  [x: string]: any
}

/**
 * @/page/editor/components/case/xx.vue
 */
//  Card
export interface ICardCase {
  content: string
  title: string
  imageUrl: string
}
