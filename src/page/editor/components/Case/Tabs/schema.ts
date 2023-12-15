import type { ILegoComponent } from '@/types/index'

const Tabs: ILegoComponent = {
  name: 'tab',
  field: 'tabs',
  type: 'Tabs',
  configOptions: [
    {
      name: '激活的标签页',
      key: 'activeKey',
      type: 'select'
    }
  ],
  configData: {}
}

export default Tabs
