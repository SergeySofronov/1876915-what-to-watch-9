import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from './browser-history';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkUserAuthorization, fetchFilmsData, fetchPromoFilm } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';

store.dispatch(fetchFilmsData());
store.dispatch(checkUserAuthorization());
store.dispatch(fetchPromoFilm());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
