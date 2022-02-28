import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FilmsDataType } from '../../types/film-type';
import { AuthorizationStatus } from '../../const';
import Avatar from '../avatar/avatar';
import Logo from '../logo/logo';
import NotFoundPage from '../not-found-page/not-found-page';
import ReviewForm from '../review-form/review-form';

type PropsTypes = {
  mocks: FilmsDataType;
};

function ReviewPage({ mocks }: PropsTypes): JSX.Element {
  const id = Number(useParams().id);
  const film = mocks.find((mock) => mock.id === id);
  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <section className="film-card film-card--full">
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

          <Avatar authorizationStatus={AuthorizationStatus.Auth} />
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
