const MINUTES_IN_HOUR = 60;
const FILM_RATING_MAX = 10;
const VIDEO_PREVIEW_DELAY = 1000;
const FILM_LIKE_THIS_MAX = 4;
const FILM_STARRING_MAX = 4;

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

const FilmScores = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10,
};

const FilmTabNames = ['Overview', 'Details', 'Reviews'];

export {
  MINUTES_IN_HOUR,
  FILM_RATING_MAX,
  VIDEO_PREVIEW_DELAY,
  FILM_LIKE_THIS_MAX,
  FILM_STARRING_MAX,
  AppRoute,
  AuthorizationStatus,
  FilmTabNames,
  FilmScores,
  FilmRating
};
