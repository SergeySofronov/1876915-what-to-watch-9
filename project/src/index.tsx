import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {FilmsData} from '../src/mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App mocks={FilmsData} />
  </React.StrictMode>,
  document.getElementById('root'));
