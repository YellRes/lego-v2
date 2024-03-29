// 定义组件详情配置
export interface ILegoComponentConfig {
  name: string
  field: string
  type: string
  key: string
}

// 定义组件类型
/**
 * TODO: IComponent.config的类型 是 IComponent.configData 数组中 IComponentConfig.key的集合
 * */
export interface ILegoComponent {
  name: string
  field: string
  type: string
  configOptions: Array<Record<string, unknown>>
  configData: Record<string, unknown>
  render?: any
}

// 预览组件类型
export interface ILegoPreviewComponent extends ILegoComponent {
  top: number
  left: number
  width: number
  height: number
  id: string
  [x: string]: any
}
