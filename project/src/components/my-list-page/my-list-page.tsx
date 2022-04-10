import { Navigate } from 'react-router-dom';
import { useAuthStatusSelector, useFavoriteFilmsDataSelector } from '../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import Footer from '../footer/footer';
import FilmsList from '../film-list/film-list';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearFavoriteFilmsData } from '../../store/films-process-data/films-process-data';
import { fetchFavoriteFilmsData } from '../../store/api-actions';

function MyListPage(): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useAuthStatusSelector();
  const films = useFavoriteFilmsDataSelector();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsData());
    return () => { dispatch(clearFavoriteFilmsData()); };
  }, [dispatch]);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.SignIn} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />

      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
