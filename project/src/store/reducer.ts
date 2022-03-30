import { createReducer } from '@reduxjs/toolkit';
import { setActiveFilmGenre, loadFilmsData, setAuthorizationStatus } from './action';
import { FILM_GENRE_DEFAULT, FILM_TAB_DEFAULT } from '../const';
import { AuthorizationStatus } from '../const';
import { FilmsDataType } from '../types/film-type';

type InitialState = {
  activeFilmGenre: string,
  activeFilmTab: string,
  filmsData: FilmsDataType,
  authorizationStatus: AuthorizationStatus,
  isFilmsLoaded: boolean;
};


const initialState: InitialState = {
  activeFilmGenre: FILM_GENRE_DEFAULT,
  activeFilmTab: FILM_TAB_DEFAULT,
  filmsData: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveFilmGenre, (state, action) => {
      state.activeFilmGenre = action.payload;
    })
    .addCase(loadFilmsData, (state, action) => {
      state.filmsData = action.payload;
      state.isFilmsLoaded = true;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
