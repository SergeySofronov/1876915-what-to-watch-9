import { Navigate } from 'react-router-dom';
import { FilmsDataType } from '../../types/film-type';
import { useAuthStatusSelector } from '../../hooks/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import Footer from '../footer/footer';
import FilmsList from '../film-list/film-list';


type PropsTypes = {
  films: FilmsDataType;
};

function MyListPage({ films }: PropsTypes): JSX.Element {
  const authorizationStatus = useAuthStatusSelector();
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
