// 定义组件详情配置
export interface ILegoComponentConfig {
  name: string
  key: string
  type: string
}

// 定义组件类型
/**
 * TODO: IComponent.config的类型 是 IComponent.configData 数组中 IComponentConfig.key的集合
 * */
export interface ILegoComponent {
  name: string
  key: string
  type: string
  configOptions: Array<IComponentConfig>
  configData: Record<string, unknown>
}

// 预览组件类型
export interface ILegoPreviewComponent extends ILegoComponent {
  top: number
  left: number
  id: string
}
