import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const.js';
import { FilmsDataType, FilmType } from './film-type.js';
import { CommentsDataType } from './comment-type.js';

type State = ReturnType<typeof store.getState>;

type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

type FilmProcess = {
  activeFilmGenre: string;
}

type FilmsProcessData = {
  activeFilmReviews: CommentsDataType;
  filmsData: FilmsDataType;
  favoriteFilmsData: FilmsDataType;
  similarFilms: FilmsDataType;
  promoFilm: FilmType | null;
  isFilmsLoaded: boolean;
}

export type { State, UserProcess, FilmProcess, FilmsProcessData };
