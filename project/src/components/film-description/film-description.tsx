import { useNavigate } from 'react-router-dom';
import { useAuthStatusSelector } from '../../hooks/selectors';
import { AuthorizationStatus } from '../../const';
import { FilmType } from '../../types/film-type';

type PropsTypes = {
  film: FilmType;
  children?: JSX.Element;
};

function FilmDescription({ film, children }: PropsTypes): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAuthStatusSelector();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${film.id}`)}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        {isAuthorized &&
          <button className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
          </button>}
        {isAuthorized && children}
      </div>
    </div>
  );
}

export default FilmDescription;

