import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { checkUserAuthorization, fetchFilmsData } from './store/api-actions';

store.dispatch(fetchFilmsData());
store.dispatch(checkUserAuthorization());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
