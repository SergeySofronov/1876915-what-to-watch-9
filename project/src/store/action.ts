import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FilmsDataType } from '../types/film-type';

const setActiveFilmGenre = createAction<string>('main-page/setActiveFilmGenre');
const loadFilmsData = createAction<FilmsDataType>('app/loadFilmsData');
const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export {
  setActiveFilmGenre,
  loadFilmsData,
  setAuthorizationStatus,
  redirectToRoute
};
