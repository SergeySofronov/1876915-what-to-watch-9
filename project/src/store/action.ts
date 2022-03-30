import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { FilmsDataType } from '../types/film-type';

const setActiveFilmGenre = createAction<string>('main-page/setActiveFilmGenre');
const loadFilmsData = createAction<FilmsDataType>('app/loadFilmsData');
const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
const setUserData = createAction<UserData>('user/UserData');
const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export {
  setActiveFilmGenre,
  loadFilmsData,
  setAuthorizationStatus,
  setUserData,
  redirectToRoute
};
