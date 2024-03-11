import type { ILegoComponent } from '@/types/index'
import type { ICardGroups } from '../type'

const cardGroup: ILegoComponent<ICardGroups> = {
  name: '卡片内容',
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
    },
    {
      key: 'cardList',
      type: 'LTable',
      name: '数据源',
      table: {
        columns: [
          {
            title: '图片',
            dataIndex: 'imgUrl',
            key: 'imgUrl'
          },
          {
            title: '标题',
            dataIndex: 'title',
            key: 'title'
          },
          {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc'
          },
          {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation'
          }
        ]
      }
    }
  ],
  configData: {
    cardList: []
  }
}

export default cardGroup
