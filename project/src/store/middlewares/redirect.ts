import { Middleware } from 'redux';
import { reducer } from '../reducer';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === 'app/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export { redirect };

