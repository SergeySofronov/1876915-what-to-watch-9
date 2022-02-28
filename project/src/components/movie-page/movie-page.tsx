import React from 'react';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import Footer from '../footer/footer';
import { NavLink, Link, Outlet, useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { FilmsDataType } from '../../types/film-type';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmDescription from '../film-description/film-description';


type PropsTypes = {
  mocks: FilmsDataType;
};

function MoviePage({ mocks }: PropsTypes): JSX.Element {
  const id = Number(useParams().id);
  const film = mocks.find((mock) => mock.id === id);
  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <Avatar authorizationStatus={AuthorizationStatus.Auth} />
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
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <NavLink to="#" className="film-nav__link">Overview</NavLink>
                  </li>
                  <li className="film-nav__item">
                    <NavLink to="#" className="film-nav__link">Details</NavLink>
                  </li>
                  <li className="film-nav__item">
                    <NavLink to="#" className="film-nav__link">Reviews</NavLink>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </section>

      <Outlet />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={AppRoute.Film}>Fantastic Beasts: The Crimes of Grindelwald</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={AppRoute.Film}>Bohemian Rhapsody</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={AppRoute.Film}>Macbeth</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={AppRoute.Film}>Aviator</Link>
              </h3>
            </article>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
