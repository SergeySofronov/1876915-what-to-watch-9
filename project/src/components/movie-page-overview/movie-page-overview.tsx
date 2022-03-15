import React from 'react';
import { FilmType } from '../../types/film-type';
import { FILM_STARRING_MAX, FilmScores, FilmRating } from '../../const';

type PropsTypes = {
  film: FilmType;
};

const getRatingLevel = (rating: number) => {
  if (rating === FilmScores.AWESOME) {
    return FilmRating.Awesome;
  }

  if (rating >= FilmScores.VERY_GOOD) {
    return FilmRating.VeryGood;
  }

  if (rating >= FilmScores.GOOD) {
    return FilmRating.Good;
  }

  if (rating >= FilmScores.NORMAL) {
    return FilmRating.Normal;
  }

  return FilmRating.Bad;
};

function MoviePageOverview({ film }: PropsTypes): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.slice(0, FILM_STARRING_MAX).join(', ')} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

export default MoviePageOverview;
