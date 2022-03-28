import { createReducer } from '@reduxjs/toolkit';
import { setActiveFilmGenre, loadFilmsData, setAuthorizationStatus, setUserData, setHttpError } from './action';
import { FILM_GENRE_DEFAULT, FILM_TAB_DEFAULT } from '../const';
import { AuthorizationStatus } from '../const';
import { FilmsDataType } from '../types/film-type';
import { UserData } from '../types/user-data';

type InitialState = {
  activeFilmGenre: string,
  activeFilmTab: string,
  filmsData: FilmsDataType,
  authorizationStatus: AuthorizationStatus,
  HttpError: string;
  userData: UserData;
  isFilmsLoaded: boolean;
};


const initialState: InitialState = {
  activeFilmGenre: FILM_GENRE_DEFAULT,
  activeFilmTab: FILM_TAB_DEFAULT,
  filmsData: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  HttpError: '',
  userData: {
    avatarUrl: '',
    email: '',
    id: NaN,
    name: '',
    token: '',
  },
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
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setHttpError, (state, action) => {
      state.HttpError = action.payload;
    });
});

export { reducer };
