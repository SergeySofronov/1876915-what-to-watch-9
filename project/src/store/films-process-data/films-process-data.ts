import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsProcessData } from '../../types/state';

const initialState: FilmsProcessData = {
  activeFilm: null,
  activeFilmReviews: [],
  filmsData: [],
  similarFilms: [],
  promoFilm: null,
  isFilmsLoaded: false,
};

const filmProcessData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setFilmsData: (state, action) => {
      state.filmsData = action.payload;
      state.isFilmsLoaded = true;
    },
    setSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    setPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    setActiveFilm: (state, action) => {
      state.activeFilm = action.payload;
    },
    setActiveFilmReviews: (state, action) => {
      state.activeFilmReviews = action.payload;
    },
    addFilmData: (state, action) => {
      state.filmsData = [...state.filmsData, action.payload];
    },
  },
});

const { setFilmsData } = filmProcessData.actions;
const { setSimilarFilms } = filmProcessData.actions;
const { setPromoFilm } = filmProcessData.actions;
const { setActiveFilm } = filmProcessData.actions;
const { setActiveFilmReviews } = filmProcessData.actions;
const { addFilmData } = filmProcessData.actions;


export {
  filmProcessData,
  setFilmsData,
  setSimilarFilms,
  setPromoFilm,
  setActiveFilm,
  setActiveFilmReviews,
  addFilmData
};


