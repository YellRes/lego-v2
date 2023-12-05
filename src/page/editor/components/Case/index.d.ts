// 定义组件详情配置
interface IComponentConfig {
  name: string
  key: string
  type: string
}

// 定义组件类型
/**
 * TODO: IComponent.config的类型 是 IComponent.configData 数组中 IComponentConfig.key的集合
 * */
interface IComponent {
  name: string
  key: string
  type: string
  configData: Array<IComponentConfig>
  config: Record<string, unknown>
}
