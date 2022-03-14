import { useState } from 'react';
import { FilmsDataType } from '../../types/film-type';
import FilmCard from '../film-card/film-card';


type PropsTypes = {
  mocks: FilmsDataType;
};

function FilmsList({ mocks }: PropsTypes): JSX.Element {

  const [activeFilmId, setActiveFilm] = useState(NaN);

  const updateActiveFilm = (id = NaN) => setActiveFilm(id);

  return (
    <div className="catalog__films-list" >
      {mocks.map((film) => <FilmCard film={film} key={film.id} update={updateActiveFilm} isActiveFilm={activeFilmId === film.id} />)}
    </div >
  );
}

export default FilmsList;
