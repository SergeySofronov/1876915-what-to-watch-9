import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

import MainPage from '../main-page/main-page';
import ReviewPage from '../review-page/review-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MoviePage from '../movie-page/movie-page';
import MyListPage from '../my-list-page/my-list-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../not-found-page/not-found-page';

function App(): JSX.Element {
  const films = useAppSelector((state) => state.filmsData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage mocks={films} />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListPage mocks={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.AddReview} element={<ReviewPage mocks={films} />} />
        <Route path={AppRoute.Film} element={<MoviePage mocks={films} />} />
        <Route path={AppRoute.Player} element={<PlayerPage mocks={films} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
