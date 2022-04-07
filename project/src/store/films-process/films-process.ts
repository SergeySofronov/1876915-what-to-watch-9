import { createSlice } from '@reduxjs/toolkit';
import { FilmProcess } from '../../types/state';
import { FILM_GENRE_DEFAULT, NameSpace } from '../../const';

const initialState: FilmProcess = {
  activeFilmGenre: FILM_GENRE_DEFAULT,
};

const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setActiveFilmGenre: (state, action) => {
      state.activeFilmGenre = action.payload;
    },
  },
});

const { setActiveFilmGenre } = filmProcess.actions;

export { filmProcess, setActiveFilmGenre };
