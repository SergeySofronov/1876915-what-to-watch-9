import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { FilmsDataType } from '../types/film-type';

const setActiveFilmGenre = createAction<string>('main-page/setActiveFilmGenre');
const loadFilmsData = createAction<FilmsDataType>('app/loadFilmsData');
const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
const setHttpError = createAction<string>('app/setHttpError');
const setUserData = createAction<UserData>('user/UserData');

export { setActiveFilmGenre, loadFilmsData, setAuthorizationStatus, setHttpError, setUserData };
