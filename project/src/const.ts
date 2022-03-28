const MINUTES_IN_HOUR = 60;
const FILM_RATING_MAX = 10;
const VIDEO_PREVIEW_DELAY = 1000;
const FILM_MAIN_PAGE_MAX = 8;
const FILM_LIKE_THIS_MAX = 4;
const FILM_STARRING_MAX = 4;
const FILM_GENRE_DEFAULT = 'All genres';
const FILM_TAB_DEFAULT = 'Overview';

const TIMEOUT_SHOW_ERROR = 2000;

enum APIRoute {
  Films = '/films',
  PromoFilm = '/promo',
  Comments = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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

const filmTabNames = [FILM_TAB_DEFAULT, 'Details', 'Reviews'];

export {
  FILM_RATING_MAX,
  FILM_LIKE_THIS_MAX,
  FILM_GENRE_DEFAULT,
  FILM_MAIN_PAGE_MAX,
  FILM_STARRING_MAX,
  FILM_TAB_DEFAULT,
  MINUTES_IN_HOUR,
  VIDEO_PREVIEW_DELAY,
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  filmTabNames,
  FilmScores,
  FilmRating,
  HttpErrorCode,
  TIMEOUT_SHOW_ERROR
};
