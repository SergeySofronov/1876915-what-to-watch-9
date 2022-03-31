import { useSelector } from 'react-redux';
import { State } from '../types/state';
import { FilmsDataType, FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../const';

const useActiveGenreSelector = () => useSelector<State, string>((state) => state.activeFilmGenre);
const useActiveFilmSelector = () => useSelector<State, FilmType | null>((state) => state.activeFilm);
const useFilmsDataSelector = () => useSelector<State, FilmsDataType>((state) => state.filmsData);
const usePromoFilmSelector = () => useSelector<State, FilmType | null>((state) => state.promoFilm);
const useAuthStatusSelector = () => useSelector<State, AuthorizationStatus>((state) => state.authorizationStatus);
const useFilmsLoadedStatusSelector = () => useSelector<State, boolean>((state) => state.isFilmsLoaded);

export {
  useActiveGenreSelector,
  useFilmsDataSelector,
  usePromoFilmSelector,
  useAuthStatusSelector,
  useFilmsLoadedStatusSelector,
  useActiveFilmSelector
};


