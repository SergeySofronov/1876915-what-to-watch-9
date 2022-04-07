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

type FavoriteData = {
  id: number;
  isFavorite: boolean;
}

export { type UserData, type CommentData, type FavoriteData };
