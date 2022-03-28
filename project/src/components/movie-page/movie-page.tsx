import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FILM_LIKE_THIS_MAX } from '../../const';
import { FilmsDataType, FilmType } from '../../types/film-type';
import { filmTabNames } from '../../const';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import Footer from '../footer/footer';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmDescription from '../film-description/film-description';
import FilmsList from '../film-list/film-list';
import FilmTabs from '../../film-tabs/film-tabs';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';

type PropsTypes = {
  films: FilmsDataType;
};

const getTabContent = (activeTab: string, film: FilmType) => {
  const [overview, details, reviews] = filmTabNames;
  switch (activeTab) {
    case overview:
      return <MoviePageOverview film={film} />;
    case details:
      return <MoviePageDetails film={film} />;
    case reviews:
      return <MoviePageReviews film={film} />;
  }
};

function MoviePage({ films }: PropsTypes): JSX.Element {
  const [activeTab, setActiveTab] = useState(filmTabNames[0]);
  const id = Number(useParams().id);
  const film = films.find((filmItem) => filmItem.id === id);

  useEffect(() => setActiveTab(filmTabNames[0]), [film?.id]);

  if (!film) {
    return <NotFoundPage />;
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
                  textContent={filmTabNames}
                  className={'film-nav__'}
                  tabChangeHandler={(tabName) => setActiveTab(tabName)}
                  activeTab={activeTab}
                />
              </nav>
              {getTabContent(activeTab, film)}
            </div>
          </div>
        </div>
      </section>


      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films.filter((filmItem) => (filmItem.genre === film.genre)).slice(0, FILM_LIKE_THIS_MAX)} />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
