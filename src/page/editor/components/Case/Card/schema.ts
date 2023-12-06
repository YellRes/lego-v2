import type { ILegoComponent } from '../../../../../types/index'

const Card: ILegoComponent = {
  name: '卡片',
  key: 'card',
  type: 'Card',
  configOptions: [
    {
      name: '图片',
      key: 'imageUrl',
      type: 'LUpload'
    },
    {
      name: '标题',
      key: 'title',
      type: 'LInput'
    },
    {
      name: '详细内容',
      key: 'content',
      type: 'LInput'
    }
  ],
  configData: {}
}

export default Card
