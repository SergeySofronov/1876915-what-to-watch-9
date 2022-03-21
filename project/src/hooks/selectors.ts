import { useSelector } from 'react-redux';
import { FilmsDataType } from '../types/film-type';
import { State } from '../types/state';

const useActiveFilmSelector = () => useSelector<State, string>((state) => state.activeFilmGenre);
const useFilmsDataSelector = () => useSelector<State, FilmsDataType>((state) => state.filmsData);

export { useActiveFilmSelector, useFilmsDataSelector };


