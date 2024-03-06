import type { ILegoComponent } from '@/types/index'

const Tabs: ILegoComponent = {
  name: 'cardGroup',
  field: 'cardGroup',
  type: 'CardGroup',
  configOptions: [
    {
      key: 'avatar',
      type: 'LSelect',
      name: '图标',
      placeholder: '请选择图标',
      isCustomOption: true,
      options: [
        {
          label: '图片',
          value: 'image'
        },
        {
          label: '写作',
          value: 'write'
        },
        {
          label: '影音',
          value: 'video'
        }
      ],
      placeholder: '请选择图标'
    },
    {
      key: 'title',
      type: 'LInput',
      name: '标题'
    },
    {
      key: 'cardOptions',
      type: 'LTable',
      name: '数据源'
    }
  ],
  configData: {}
}

export default Tabs
