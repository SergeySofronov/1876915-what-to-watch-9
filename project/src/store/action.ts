import { createAction } from '@reduxjs/toolkit';
import { FilmsDataType } from '../types/film-type';

const setActiveFilmGenre = createAction<{ activeFilmGenre: string }>('main-page/setActiveFilmGenre');
const setFilmsData = createAction<{ filmsData: FilmsDataType }>('main-page/setFilmsData');

export { setActiveFilmGenre, setFilmsData };
