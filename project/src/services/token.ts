import { UserData } from '../types/user-data';
type Token = string;

const USER_AVATAR_URL_KEY = 'userAvatarUrl';
const USER_TOKEN_KEY = 'userToken';

const getToken = (): Token => {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  return token ?? '';
};

const getUserAvatarUrl = () => {
  const avatarUrl = localStorage.getItem(USER_AVATAR_URL_KEY);
  return avatarUrl ?? '';
};

const saveUserData = (userData: UserData): void => {
  localStorage.setItem(USER_AVATAR_URL_KEY, userData.avatarUrl);
  localStorage.setItem(USER_TOKEN_KEY, userData.token);
};

const dropUserData = (): void => {
  localStorage.removeItem(USER_AVATAR_URL_KEY);
  localStorage.removeItem(USER_TOKEN_KEY);
};

export {
  getToken,
  getUserAvatarUrl,
  saveUserData,
  dropUserData,
  type Token
};
