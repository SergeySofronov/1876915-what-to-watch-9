import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILM_QUANTITY = 20;

const PromoFilmProps = {
  NAME: 'Johnny English',
  GENRE: 'Comedy',
  YEAR: '1902',
};

ReactDOM.render(
  <React.StrictMode>
    <App emptyAnchor = '#no_scroll' filmsDefaultQuantity = {FILM_QUANTITY} promoProps = {PromoFilmProps} />
  </React.StrictMode>,
  document.getElementById('root'));
