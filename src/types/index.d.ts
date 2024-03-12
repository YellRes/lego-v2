import type {
  IPreviewCard,
  ICardGroups,
  IParagraph
} from '@/page/editor/components/Case/type'

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
export interface ILegoComponent<T> {
  name: string
  field: string
  type: string
  configOptions: Array<{ key: keyof T } & Record<string, unknown>>
  configData: T
  render?: any
}

// 预览组件类型
export interface ILegoPreviewComponent
  extends ILegoComponent<IPreviewCard | ICardGroups | IParagraph> {
  top: number
  left: number
  width: number
  height: number
  id: string
  [x: string]: any
}
