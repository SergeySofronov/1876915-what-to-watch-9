import { createAction } from '@reduxjs/toolkit';
import { FilmsDataType } from '../types/film-type';

const setActiveFilmGenre = createAction<{ activeFilmGenre: string }>('main-page/setActiveFilmGenre');
const setActiveFilmTab = createAction<{ activeFilmTab: string }>('movie-page/setActiveFilmTab');
const setFilmsData = createAction<{ filmsData: FilmsDataType }>('main-page/setFilmsData');

export { setActiveFilmGenre, setActiveFilmTab, setFilmsData };
