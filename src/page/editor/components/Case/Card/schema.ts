import type { ILegoComponent, ICardCase } from '../../../../../types/index'

const Card: ILegoComponent<ICardCase> = {
  name: '卡片',
  field: 'card',
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
  configData: {
    imageUrl: '@/assets/image.svg',
    title: '标题',
    content: '暂无简介'
  }
}

export default Card
