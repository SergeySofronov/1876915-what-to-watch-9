import { memo } from 'react';
import { Link } from 'react-router-dom';
import { APIRoute } from '../../const';
import { FilmType } from '../../types/film-type';
import VideoPlayer from '../video-player/video-player';

type PropsTypes = {
  film: FilmType;
  isActiveFilm: boolean;
  update: (id?: number) => void;
};

function FilmCard({ film, update, isActiveFilm }: PropsTypes): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => update(film.id)} onMouseLeave={() => update()}>
      <div className="small-film-card__image" >
        <VideoPlayer film={film} isActiveFilm={isActiveFilm} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${APIRoute.Films}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default memo(FilmCard);
