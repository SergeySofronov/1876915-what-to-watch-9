import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FilmsDataType, FilmType } from '../types/film-type';

const setActiveFilmGenre = createAction<string>('main-page/setActiveFilmGenre');
const setFilmsData = createAction<FilmsDataType>('app/setFilmsData');
const addFilmData = createAction<FilmType>('app/addFilmData');
const setPromoFilm = createAction<FilmType | null>('data/setPromoFilm');
const setActiveFilm = createAction<FilmType | null>('app/setActiveFilm');
const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export {
  setActiveFilmGenre,
  setFilmsData,
  setPromoFilm,
  setActiveFilm,
  setAuthorizationStatus,
  redirectToRoute,
  addFilmData
};
