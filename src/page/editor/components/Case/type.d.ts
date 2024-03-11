export interface IPreviewCard {
  imageUrl?: string
  title?: string
  content?: string
}

// 卡片集合
export interface ICardGroups {
  title?: string
  avatar?: string
  cardList?: Array<IPreviewCard>
}

// 段落
export interface IParagraph {
  title?: string
}
