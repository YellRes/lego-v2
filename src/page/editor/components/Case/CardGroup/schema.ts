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
      ]
    },
    {
      key: 'title',
      type: 'LInput',
      name: '标题'
    }
  ],
  configData: {}
}

export default Tabs
