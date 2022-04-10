import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSimilarFilmsSelector } from '../../store/selectors';
import { FILM_LIKE_THIS_MAX } from '../../const';
import { fetchFilm, fetchFilmReviews, fetchSimilarFilms } from '../../store/api-actions';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import Footer from '../footer/footer';
import FilmDescription from '../film-description/film-description';
import FilmsList from '../film-list/film-list';
import MoviePageContent from '../movie-page-content/movie-page-content';
import { useSearchFilmById } from '../../hooks/search-film-by-id';

function MoviePage(): JSX.Element | null {
  const { film, id } = useSearchFilmById();
  const dispatch = useDispatch();
  const similarFilms = useSimilarFilmsSelector();

  useEffect(() => { dispatch(fetchSimilarFilms(id)); }, [dispatch, id]);
  useEffect(() => { dispatch(fetchFilmReviews(id)); }, [dispatch, id]);

  if (!film) {
    dispatch(fetchFilm(id));
    return null;
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full" style={{ backgroundColor: film.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <Avatar />
          </header>

          <div className="film-card__wrap">
            <FilmDescription film={film}>
              <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
            </FilmDescription>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>
            <MoviePageContent film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {similarFilms &&
            <FilmsList films={similarFilms.slice(0, FILM_LIKE_THIS_MAX)} />}
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
