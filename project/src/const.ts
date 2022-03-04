const MINUTES_IN_HOUR = 60;
const FILM_RATING_MAX = 10;

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

export { MINUTES_IN_HOUR, FILM_RATING_MAX, AppRoute, AuthorizationStatus };
