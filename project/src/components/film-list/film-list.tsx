import React from 'react';
import { useState } from 'react';
import { FilmsDataType, FilmType } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

type PropsTypes = {
  mocks: FilmsDataType;
};

function FilmsList({ mocks }: PropsTypes): JSX.Element {

  const [activeFilm, setActiveFilm] = useState(mocks[0]);

  const updateActiveFilm = (film: FilmType) => {
    setActiveFilm({ ...activeFilm, ...film });
  };


  return (
    <div className="catalog__films-list" >
      {mocks.map((film) => <FilmCard film={film} key={film.id} update={updateActiveFilm} />)}
    </div >
  );
}

export default FilmsList;
