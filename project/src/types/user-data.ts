type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

type CommentData = {
  id: number;
  comment: string;
  rating: number;
}

export { type UserData, type CommentData };
