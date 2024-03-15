import type { ILegoComponent } from '@/types/index'
import type { IParagraph } from '../type'

const Paragraph: ILegoComponent<IParagraph> = {
  name: '标题',
  field: 'Paragraph',
  type: 'Paragraph',
  configOptions: [
    {
      key: 'title',
      type: 'LInput',
      name: '内容',
      placeholder: '请输入内容'
    }
  ],
  configData: {
    title: ''
  }
}

export default Paragraph
