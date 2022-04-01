import { useSelector } from 'react-redux';
import { State } from '../types/state';
import { FilmsDataType, FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../const';
import { CommentsDataType } from '../types/comment-type';

const useActiveGenreSelector = () => useSelector<State, string>((state) => state.activeFilmGenre);
const useActiveFilmSelector = () => useSelector<State, FilmType | null>((state) => state.activeFilm);
const useActiveFilmReviewsSelector = () => useSelector<State, CommentsDataType>((state) => state.activeFilmReviews);
const useFilmsDataSelector = () => useSelector<State, FilmsDataType>((state) => state.filmsData);
const useSimilarFilmsSelector = () => useSelector<State, FilmsDataType>((state) => state.similarFilms);
const usePromoFilmSelector = () => useSelector<State, FilmType | null>((state) => state.promoFilm);
const useAuthStatusSelector = () => useSelector<State, AuthorizationStatus>((state) => state.authorizationStatus);
const useFilmsLoadedStatusSelector = () => useSelector<State, boolean>((state) => state.isFilmsLoaded);

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


