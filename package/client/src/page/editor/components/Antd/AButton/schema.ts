import type { ILegoComponent } from '@/types/index'
import type { ButtonProps } from 'ant-design-vue'

const AButton: ILegoComponent<ButtonProps & { content: string }> = {
  name: '按钮',
  field: 'Button',
  type: 'AButton',
  configOptions: [
    {
      name: '类型',
      key: 'type',
      type: 'LSelect',
      options: [
        {
          label: 'primary',
          value: 'primary'
        },
        {
          label: 'ghost',
          value: 'ghost'
        },
        {
          label: 'dashed',
          value: 'dashed'
        },
        {
          label: 'link',
          value: 'link'
        },
        {
          label: 'text',
          value: 'text'
        },
        {
          label: 'default',
          value: 'default'
        }
      ]
    },
    {
      name: '大小',
      key: 'size',
      type: 'LSelect',
      options: [
        {
          label: '大',
          value: 'large'
        },
        {
          label: '中',
          value: 'middle'
        },
        {
          label: '小',
          value: 'small'
        }
      ]
    },
    {
      name: '形状',
      key: 'shape',
      type: 'LSelect',
      options: [
        {
          label: '默认',
          value: 'default'
        },
        {
          label: '圆',
          value: 'circle'
        },
        {
          label: '圆角',
          value: 'round'
        }
      ]
    }
  ],
  configData: {
    type: 'primary',
    content: ''
  }
}

export default AButton
