import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { CommentsDataType } from '../types/comment-type';
import { FilmsDataType, FilmType } from '../types/film-type';

const setActiveFilmGenre = createAction<string>('main-page/setActiveFilmGenre');
const setFilmsData = createAction<FilmsDataType>('data/main-page/setFilmsData');
const setSimilarFilms = createAction<FilmsDataType>('data/movie-page/setSimilarFilms');
const addFilmData = createAction<FilmType>('data/movie-page/addFilmData');
const setPromoFilm = createAction<FilmType | null>('data/main-page/setPromoFilm');
const setActiveFilm = createAction<FilmType | null>('data/movie-page/setActiveFilm');
const setActiveFilmReviews = createAction<CommentsDataType>('data/movie-page/setActiveFilmReviews');
const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
const setFilmReviews = createAction<CommentsDataType>('data/movie-page/setFilmReviews');
const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export {
  setActiveFilmGenre,
  setFilmsData,
  setSimilarFilms,
  setPromoFilm,
  setActiveFilm,
  setActiveFilmReviews,
  setFilmReviews,
  setAuthorizationStatus,
  redirectToRoute,
  addFilmData
};
