import { createReducer } from '@reduxjs/toolkit';
import { setActiveFilmGenre, setActiveFilmTab, setFilmsData } from './action';
import { FILM_GENRE_DEFAULT, FILM_TAB_DEFAULT } from '../const';
import { FilmsData } from '../mocks/films';

const initialState = {
  activeFilmGenre: FILM_GENRE_DEFAULT,
  activeFilmTab: FILM_TAB_DEFAULT,
  filmsData: FilmsData,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveFilmGenre, (state, action) => {
      state.activeFilmGenre = action.payload.activeFilmGenre;
    })
    .addCase(setActiveFilmTab, (state, action) => {
      state.activeFilmTab = action.payload.activeFilmTab;
    })
    .addCase(setFilmsData, (state, action) => {
      state.filmsData = action.payload.filmsData;
    });
});

export { reducer };
