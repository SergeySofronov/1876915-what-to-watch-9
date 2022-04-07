import React from 'react';
import { FilmsDataType, FilmType } from '../../types/film-type';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import Footer from '../footer/footer';
import FilmsMainCatalog from '../films-main-catalog/films-main-catalog';
import FilmDescription from '../film-description/film-description';

type PropsTypes = {
  films: FilmsDataType;
  promoFilm: FilmType;
};

function MainPage({ films, promoFilm }: PropsTypes): JSX.Element {
  return (
    <React.Fragment>
      <section className="film-card" >
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <Avatar />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>
            <FilmDescription film={promoFilm} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmsMainCatalog films={films} />
        <Footer />
      </div >
    </React.Fragment>
  );
}

export default MainPage;
