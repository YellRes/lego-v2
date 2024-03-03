import type { ILegoComponent } from '@/types/index'

const Tabs: ILegoComponent = {
  name: 'cardGroup',
  field: 'cardGroup',
  type: 'CardGroup',
  configOptions: [
    {
      key: 'avatar',
      type: 'LInput',
      name: '图标'
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
