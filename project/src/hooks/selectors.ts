import { useSelector } from 'react-redux';
import { State } from '../types/state';
import { FilmsDataType } from '../types/film-type';
import { AuthorizationStatus } from '../const';

const useActiveFilmSelector = () => useSelector<State, string>((state) => state.activeFilmGenre);
const useFilmsDataSelector = () => useSelector<State, FilmsDataType>((state) => state.filmsData);
const useAuthStatusSelector = () => useSelector<State, AuthorizationStatus>((state) => state.authorizationStatus);
const useFilmsLoadedStatusSelector = () => useSelector<State, boolean>((state) => state.isFilmsLoaded);

export {
  useActiveFilmSelector,
  useFilmsDataSelector,
  useAuthStatusSelector,
  useFilmsLoadedStatusSelector
};


