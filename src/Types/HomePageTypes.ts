


//! renderList array' s props
export type RenderListProps = {
  data: [RenderItemProps]
}

//! renderItem object props
export type RenderItemProps = {
  item: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
    rank: number
    image: {
      url: string
      width: number
      height: number
    }
  },
  index: number
}

