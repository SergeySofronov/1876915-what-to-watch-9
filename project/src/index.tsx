import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PromoFilmProps = {
  NAME: 'Johnny English',
  GENRE: 'Comedy',
  YEAR: '1902',
};

ReactDOM.render(
  <React.StrictMode>
    <App promoProps={PromoFilmProps} />
  </React.StrictMode>,
  document.getElementById('root'));
