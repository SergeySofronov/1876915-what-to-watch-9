import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useActiveFilmReviewsSelector, useActiveFilmSelector, useSimilarFilmsSelector } from '../../hooks/selectors';
import { FILM_LIKE_THIS_MAX } from '../../const';
import { FilmsDataType, FilmType } from '../../types/film-type';
import { CommentsDataType } from '../../types/comment-type';
import { FILM_TAB_NAMES } from '../../const';
import { fetchFilm, fetchFilmReviews, fetchSimilarFilms } from '../../store/api-actions';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import Footer from '../footer/footer';
import FilmDescription from '../film-description/film-description';
import FilmsList from '../film-list/film-list';
import FilmTabs from '../film-tabs/film-tabs';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';

type PropsTypes = {
  films: FilmsDataType;
};

const getTabContent = (activeTab: string, film: FilmType, comments: CommentsDataType) => {
  const [overview, details, reviews] = FILM_TAB_NAMES;
  switch (activeTab) {
    case overview:
      return <MoviePageOverview film={film} />;
    case details:
      return <MoviePageDetails film={film} />;
    case reviews:
      return <MoviePageReviews film={film} comments={comments} />;
  }
};

function MoviePage({ films }: PropsTypes): JSX.Element | null {
  const [activeTab, setActiveTab] = useState(FILM_TAB_NAMES[0]);
  const id = Number(useParams().id);
  const dispatch = useDispatch();
  const activeFilm = useActiveFilmSelector();
  const activeFilmReviews = useActiveFilmReviewsSelector();
  const similarFilms = useSimilarFilmsSelector();
  const film = films.find((filmItem) => filmItem.id === id) || (activeFilm?.id === id ? activeFilm : null);

  useEffect(() => setActiveTab(FILM_TAB_NAMES[0]), [id]);
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

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <FilmTabs
                  textContent={FILM_TAB_NAMES}
                  className={'film-nav__'}
                  tabChangeHandler={(tabName) => setActiveTab(tabName)}
                  activeTab={activeTab}
                />
              </nav>
              {getTabContent(activeTab, film, activeFilmReviews)}
            </div>
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
