import { useSelector } from 'react-redux';
import { FilmsProcessData, State } from '../types/state';
import { AuthorizationStatus, NameSpace } from '../const';

const useActiveGenreSelector = () => useSelector<State, string>((state) => state[NameSpace.Film].activeFilmGenre);

const useAuthStatusSelector = () => useSelector<State, AuthorizationStatus>((state) => state[NameSpace.User].authorizationStatus);

const useFilmDataState = () => useSelector<State, FilmsProcessData>((state) => state[NameSpace.Data]);

const useFilmReviewsSelector = () => useFilmDataState().activeFilmReviews;
const useFilmsDataSelector = () => useFilmDataState().filmsData;
const useFavoriteFilmsDataSelector = () => useFilmDataState().favoriteFilmsData;
const useSimilarFilmsSelector = () => useFilmDataState().similarFilms;
const usePromoFilmSelector = () => useFilmDataState().promoFilm;
const useFilmsLoadedStatusSelector = () => useFilmDataState().isFilmsLoaded;

export {
  useActiveGenreSelector,
  useFilmsDataSelector,
  useFavoriteFilmsDataSelector,
  useSimilarFilmsSelector,
  useFilmReviewsSelector,
  usePromoFilmSelector,
  useAuthStatusSelector,
  useFilmsLoadedStatusSelector
};


