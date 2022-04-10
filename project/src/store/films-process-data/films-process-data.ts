import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, ReviewFormStatus } from '../../const';
import { FilmsProcessData } from '../../types/state';

const initialState: FilmsProcessData = {
  activeFilmReviews: [],
  filmsData: [],
  favoriteFilmsData: [],
  similarFilms: [],
  promoFilm: null,
  isFilmsLoaded: false,
  isReviewSending: ReviewFormStatus.Enabled,
};

const filmProcessData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setFilmsData: (state, action) => {
      state.filmsData = action.payload;
      state.isFilmsLoaded = true;
    },
    clearFavoriteFilmsData: (state) => {
      state.favoriteFilmsData = [];
    },
    setFavoriteFilmsData: (state, action) => {
      state.favoriteFilmsData = action.payload;
    },
    setSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    setPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    setFilmReviews: (state, action) => {
      state.activeFilmReviews = action.payload;
    },
    addFilmData: (state, action) => {
      if (!state.filmsData.find((film) => film.id === action.payload.id)) {
        state.filmsData = [...state.filmsData, action.payload];
      }
    },
    changeFilmFavoriteStatus: (state, action) => {
      const id = action.payload.id;
      const index = state.filmsData.findIndex((film) => film.id === id);
      if (index !== -1) {
        state.filmsData[index] = action.payload;
      }
      if (state.promoFilm?.id === id) {
        state.promoFilm = action.payload;
      }
    },
    setReviewFormStatus: (state, action) => {
      state.isReviewSending = action.payload;
    },
  },
});

const {
  setFavoriteFilmsData,
  clearFavoriteFilmsData,
  setFilmsData,
  setSimilarFilms,
  setPromoFilm,
  setFilmReviews,
  addFilmData,
  changeFilmFavoriteStatus,
  setReviewFormStatus,
} = filmProcessData.actions;


export {
  filmProcessData,
  setFavoriteFilmsData,
  clearFavoriteFilmsData,
  setFilmsData,
  setSimilarFilms,
  setPromoFilm,
  setFilmReviews,
  addFilmData,
  changeFilmFavoriteStatus,
  setReviewFormStatus
};


