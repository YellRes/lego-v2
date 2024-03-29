import type { ILegoComponent } from '@/types/index'

const Card: ILegoComponent = {
  name: '卡片',
  field: 'card',
  type: 'Card',
  configOptions: [
    // {
    //   name: '图片',
    //   key: 'imageUrl',
    //   type: 'LUpload'
    // },
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
    title: '标题',
    content: '内容'
  }
}

export default Card
