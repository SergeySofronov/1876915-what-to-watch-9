import { createReducer } from '@reduxjs/toolkit';
import { setActiveFilmGenre, setFilmsData, setAuthorizationStatus, setPromoFilm, setActiveFilm, addFilmData } from './action';
import { FILM_GENRE_DEFAULT, FILM_TAB_DEFAULT } from '../const';
import { AuthorizationStatus } from '../const';
import { FilmsDataType, FilmType } from '../types/film-type';

type InitialState = {
  activeFilmGenre: string;
  activeFilmTab: string;
  activeFilm: FilmType | null;
  filmsData: FilmsDataType;
  promoFilm: FilmType | null;
  authorizationStatus: AuthorizationStatus;
  isFilmsLoaded: boolean;
};


const initialState: InitialState = {
  activeFilmGenre: FILM_GENRE_DEFAULT,
  activeFilmTab: FILM_TAB_DEFAULT,
  activeFilm: null,
  filmsData: [],
  promoFilm: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveFilmGenre, (state, action) => {
      state.activeFilmGenre = action.payload;
    })
    .addCase(setFilmsData, (state, action) => {
      state.filmsData = action.payload;
      state.isFilmsLoaded = true;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setActiveFilm, (state, action) => {
      state.activeFilm = action.payload;
    })
    .addCase(addFilmData, (state, action) => {
      state.filmsData = [...state.filmsData, action.payload];
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
