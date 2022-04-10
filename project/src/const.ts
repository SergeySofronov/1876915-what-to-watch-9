const BASE_URL = 'https://9.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
const FILM_RATING_MAX = 10;
const FILM_RATING_MIN = 1;
const FILM_RATING_DEFAULT = 0;
const VIDEO_PREVIEW_DELAY = 1000;
const FILM_MAIN_PAGE_MAX = 8;
const FILM_LIKE_THIS_MAX = 4;
const FILM_STARRING_MAX = 4;
const FILM_GENRE_DEFAULT = 'All genres';
const FILM_TAB_DEFAULT = 'Overview';
const FILM_TAB_NAMES = [FILM_TAB_DEFAULT, 'Details', 'Reviews'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
const USER_REVIEW_LENGTH_MIN = 50;
const USER_REVIEW_LENGTH_MAX = 400;
const PLAYER_PROGRESS_MAX = 100;
const PLAYER_PROGRESS_MIN = 0;
const PLAYER_PROGRESS_UPDATE_INTERVAL = 300;

enum APIRoute {
  Films = '/films',
  Favorite = '/favorite',
  PromoFilm = '/promo',
  Comments = '/comments',
  SimilarFilms = '/similar',
  Login = '/login',
  Logout = '/logout',
}

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

enum FilmRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

enum FilmScores {
  Bad = 0,
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

enum HttpErrorCode {
  BadRequest = 400,
  UnAuthorized = 401,
  NotFound = 404,
}

enum NameSpace {
  Data = 'Data',
  Film = 'Film',
  User = 'User',
}

enum PlayerState {
  Play = 'Playing',
  Pause = 'Paused',
  Stop = 'Stopped'
}

enum VideoLoadingState {
  Unknown = 'Unknown',
  Pending = 'Pending',
  Done = 'Done'
}

enum ReviewFormStatus {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export {
  BASE_URL,
  REQUEST_TIMEOUT,
  FILM_RATING_MAX,
  FILM_RATING_MIN,
  FILM_RATING_DEFAULT,
  FILM_LIKE_THIS_MAX,
  FILM_GENRE_DEFAULT,
  FILM_MAIN_PAGE_MAX,
  FILM_STARRING_MAX,
  FILM_TAB_DEFAULT,
  FILM_TAB_NAMES,
  MONTH_NAMES,
  MINUTES_IN_HOUR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  VIDEO_PREVIEW_DELAY,
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  FilmScores,
  FilmRating,
  HttpErrorCode,
  USER_REVIEW_LENGTH_MAX,
  USER_REVIEW_LENGTH_MIN,
  PLAYER_PROGRESS_MAX,
  PLAYER_PROGRESS_MIN,
  PLAYER_PROGRESS_UPDATE_INTERVAL,
  NameSpace,
  PlayerState,
  VideoLoadingState,
  ReviewFormStatus
};
