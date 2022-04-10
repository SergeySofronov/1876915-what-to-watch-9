import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api, store } from '../store';
import { AuthData } from '../types/api-data';
import { redirectToRoute } from './action';
import { handleHttpError } from '../services/error-handle';
import { CommentsDataType } from '../types/comment-type';
import { setAuthorizationStatus } from './user-process/user-process';
import { FilmsDataType, FilmType } from '../types/film-type';
import { CommentData, FavoriteData, UserData } from '../types/user-data';
import { dropUserData, saveUserData } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, ReviewFormStatus } from '../const';
import { addFilmData, changeFilmFavoriteStatus, setFavoriteFilmsData, setFilmReviews, setFilmsData, setPromoFilm, setReviewFormStatus, setSimilarFilms } from './films-process-data/films-process-data';

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

const fetchFavoriteFilmsData = createAsyncThunk(
  'data/fetchFavoriteFilmsData',
  async () => {
    try {
      const { data } = await api.get<FilmsDataType>(APIRoute.Favorite);
      store.dispatch(setFavoriteFilmsData(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

const fetchSimilarFilms = createAsyncThunk(
  'data/fetchSimilarFilms',
  async (id: number) => {
    try {
      const { data } = await api.get<FilmsDataType>(`${APIRoute.Films}/${id}${APIRoute.SimilarFilms}`);
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
  async (id: number) => {
    try {
      const { data } = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
      store.dispatch(addFilmData(data));
    } catch (error) {
      store.dispatch(redirectToRoute(AppRoute.NotFound));
      handleHttpError(error);
    }
  },
);

const changeFavoriteStatus = createAsyncThunk(
  'data/changeFavoriteStatus',
  async ({ id, isFavorite }: FavoriteData) => {
    try {
      const { data } = await api.post<boolean, AxiosResponse<FilmType>>(`${APIRoute.Favorite}/${id}/${Number(isFavorite)}`);
      store.dispatch(changeFilmFavoriteStatus(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

const fetchFilmReviews = createAsyncThunk(
  'data/fetchFilmReviews',
  async (id: number) => {
    try {
      const { data } = await api.get<CommentsDataType>(`${APIRoute.Comments}/${id}`);
      store.dispatch(setFilmReviews(data));
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
      store.dispatch(setFilmReviews(data));
      store.dispatch(redirectToRoute(`${AppRoute.Films}/${id}`));
    } catch (error) {
      handleHttpError(error);
    } finally {
      store.dispatch(setReviewFormStatus(ReviewFormStatus.Enabled));
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
  fetchFavoriteFilmsData,
  fetchSimilarFilms,
  fetchPromoFilm,
  fetchFilm,
  fetchFilmReviews,
  changeFavoriteStatus,
  sendFilmReview,
  checkUserAuthorization,
  makeUserLogIn,
  makeUserLogOut
};
