import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { FilmsDataType, FilmType } from '../types/film-type';
import { handleHttpError } from '../services/error-handle';
import { dropUserData, saveUserData } from '../services/token';
import { AuthData } from '../types/api-data';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { setFilmsData, redirectToRoute, setAuthorizationStatus, setPromoFilm, setActiveFilm, addFilmData, setSimilarFilms, setActiveFilmReviews } from './action';
import { CommentsDataType } from '../types/comment-type';

const fetchFilmsData = createAsyncThunk(
  'data/fetchFilmsData',
  async () => {
    try {
      const { data } = await api.get<FilmsDataType>(APIRoute.Films);
      store.dispatch(setFilmsData(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

const fetchSimilarFilms = createAsyncThunk(
  'data/fetchSimilarFilms',
  async (filmId: number) => {
    try {
      const { data } = await api.get<FilmsDataType>(`${APIRoute.Films}/${filmId}${APIRoute.SimilarFilms}`);
      store.dispatch(setSimilarFilms(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

const fetchPromoFilm = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const { data } = await api.get<FilmType>(APIRoute.PromoFilm);
      store.dispatch(setPromoFilm(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

const fetchFilm = createAsyncThunk(
  'data/fetchFilm',
  async (filmId: number) => {
    try {
      const { data } = await api.get<FilmType>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(setActiveFilm(data));
      store.dispatch(addFilmData(data));
    } catch (error) {
      store.dispatch(redirectToRoute(AppRoute.NotFound));
      handleHttpError(error);
    }
  },
);

const fetchFilmReviews = createAsyncThunk(
  'data/fetchFilmReviews',
  async (filmId: number) => {
    try {
      const { data } = await api.get<CommentsDataType>(`${APIRoute.Comments}/${filmId}`);
      store.dispatch(setActiveFilmReviews(data));
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

export {
  fetchFilmsData,
  fetchSimilarFilms,
  fetchPromoFilm,
  fetchFilm,
  fetchFilmReviews,
  checkUserAuthorization,
  makeUserLogIn,
  makeUserLogOut
};
