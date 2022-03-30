import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { FilmsDataType } from '../types/film-type';
import { handleHttpError } from '../services/error-handle';
import { dropUserData, saveUserData } from '../services/token';
import { AuthData } from '../types/api-data';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { loadFilmsData, redirectToRoute, setAuthorizationStatus } from './action';

const fetchFilmsData = createAsyncThunk(
  'data/fetchQuestions',
  async () => {
    try {
      const { data } = await api.get<FilmsDataType>(APIRoute.Films);
      store.dispatch(loadFilmsData(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

const checkUserAuthorization = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

const makeUserLogIn = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveUserData(data);
      store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      handleHttpError(error);
      store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

const makeUserLogOut = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropUserData();
      store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

export { fetchFilmsData, checkUserAuthorization, makeUserLogIn, makeUserLogOut };
