// 定义组件详情配置
interface IComponentConfig {
  name: string
  key: string
  type: string
}

// 定义组件类型
interface IComponent {
  name: string
  key: string
  type: string
  configData: Array<IComponentConfig>
  config: Record<IComponentConfig[key], unknown>
}

// const componentConfig: IComponentConfig = {
//   name: '姓名',
//   key: 'name',
//   type: 'input'
// }

// const component: IComponent = {
//   name: '测试',
//   key: 'test',
//   type: 'input',
//   configData: [componentConfig],
//   config: {
//     name: '测试',

//     key: 'test',
//     type: 'input'
//   }
// }
