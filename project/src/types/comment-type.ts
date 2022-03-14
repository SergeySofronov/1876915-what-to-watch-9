type CommentType = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }
}

type CommentsDataType = CommentType[] | [];

export type { CommentType, CommentsDataType };
