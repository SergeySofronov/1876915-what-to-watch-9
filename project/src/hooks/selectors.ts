import { useSelector } from 'react-redux';
import { FilmsProcessData, State } from '../types/state';
import { AuthorizationStatus, NameSpace } from '../const';

const useActiveGenreSelector = () => useSelector<State, string>((state) => state[NameSpace.film].activeFilmGenre);

const useAuthStatusSelector = () => useSelector<State, AuthorizationStatus>((state) => state[NameSpace.user].authorizationStatus);

const useFilmDataState = () => useSelector<State, FilmsProcessData>((state) => state[NameSpace.data]);

const useActiveFilmSelector = () => useFilmDataState().activeFilm;
const useActiveFilmReviewsSelector = () => useFilmDataState().activeFilmReviews;
const useFilmsDataSelector = () => useFilmDataState().filmsData;
const useSimilarFilmsSelector = () => useFilmDataState().similarFilms;
const usePromoFilmSelector = () => useFilmDataState().promoFilm;
const useFilmsLoadedStatusSelector = () => useFilmDataState().isFilmsLoaded;

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


