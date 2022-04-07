import { Link, Navigate } from 'react-router-dom';
import { useAuthStatusSelector } from '../../hooks/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import ReviewForm from '../review-form/review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import { useSearchFilmById } from '../../hooks/search-film-by-id';

function ReviewPage(): JSX.Element {
  const { film } = useSearchFilmById();
  const authorizationStatus = useAuthStatusSelector();

  if (!film) {
    return <NotFoundPage />;
  }

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.SignIn} />;
  }

  return (
    <section className="film-card film-card--full" style={{ backgroundColor: film.backgroundColor }}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to='#' className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <Avatar />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>
      <ReviewForm film={film} />
    </section>
  );
}

export default ReviewPage;
