import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from '../store';
import { store } from '../store';
import { AuthData } from '../types/api-data';
import { redirectToRoute } from './action';
import { handleHttpError } from '../services/error-handle';
import { CommentsDataType } from '../types/comment-type';
import { setAuthorizationStatus } from './user-process/user-process';
import { FilmsDataType, FilmType } from '../types/film-type';
import { CommentData, UserData } from '../types/user-data';
import { dropUserData, saveUserData } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { addFilmData, setActiveFilm, setActiveFilmReviews, setFilmsData, setPromoFilm, setSimilarFilms } from './films-process-data/films-process-data';

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

const sendFilmReview = createAsyncThunk(
  'data/fetchFilmReviews',
  async ({ id, comment, rating }: CommentData) => {
    try {
      const { data } = await api.post<CommentData, AxiosResponse<CommentsDataType>>(`${APIRoute.Comments}/${id}`, { comment, rating });
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
  sendFilmReview,
  checkUserAuthorization,
  makeUserLogIn,
  makeUserLogOut
};
