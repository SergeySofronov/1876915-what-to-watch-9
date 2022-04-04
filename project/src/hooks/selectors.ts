import { useSelector } from 'react-redux';
import { State } from '../types/state';
import { FilmsDataType, FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../const';
import { CommentsDataType } from '../types/comment-type';

const useActiveGenreSelector = () => useSelector<State, string>((state) => state.FILM.activeFilmGenre);

const useAuthStatusSelector = () => useSelector<State, AuthorizationStatus>((state) => state.USER.authorizationStatus);

const useActiveFilmSelector = () => useSelector<State, FilmType | null>((state) => state.DATA.activeFilm);
const useActiveFilmReviewsSelector = () => useSelector<State, CommentsDataType>((state) => state.DATA.activeFilmReviews);
const useFilmsDataSelector = () => useSelector<State, FilmsDataType>((state) => state.DATA.filmsData);
const useSimilarFilmsSelector = () => useSelector<State, FilmsDataType>((state) => state.DATA.similarFilms);
const usePromoFilmSelector = () => useSelector<State, FilmType | null>((state) => state.DATA.promoFilm);
const useFilmsLoadedStatusSelector = () => useSelector<State, boolean>((state) => state.DATA.isFilmsLoaded);


export {
  useActiveGenreSelector,
  useFilmsDataSelector,
  useSimilarFilmsSelector,
  useActiveFilmReviewsSelector,
  usePromoFilmSelector,
  useAuthStatusSelector,
  useFilmsLoadedStatusSelector,
  useActiveFilmSelector
};


