import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthStatusSelector, useFilmsDataSelector, useFilmsLoadedStatusSelector } from '../../hooks/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainPage from '../main-page/main-page';
import ReviewPage from '../review-page/review-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MoviePage from '../movie-page/movie-page';
import MyListPage from '../my-list-page/my-list-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {
  const isFilmsDataLoaded = useFilmsLoadedStatusSelector();
  const authorizationStatus = useAuthStatusSelector();
  const films = useFilmsDataSelector();

  if ((authorizationStatus === AuthorizationStatus.Unknown) || (!isFilmsDataLoaded)) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={films} />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.AddReview} element={<ReviewPage films={films} />} />
        <Route path={AppRoute.Film} element={<MoviePage films={films} />} />
        <Route path={AppRoute.Player} element={<PlayerPage films={films} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
