import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthStatusSelector } from '../../hooks/selectors';
import { AuthorizationStatus } from '../../const';
import { FilmType } from '../../types/film-type';
import { changeFavoriteStatus } from '../../store/api-actions';

type PropsTypes = {
  film: FilmType;
  children?: JSX.Element;
};

function FilmDescription({ film, children }: PropsTypes): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAuthStatusSelector();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const onInMyListButtonClick = () => dispatch(changeFavoriteStatus({ id: film.id, isFavorite: !film.isFavorite }));
  const onPlayButtonClick = () => navigate(`/player/${film.id}`);

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button" onClick={onPlayButtonClick}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        {isAuthorized &&
          <button className="btn btn--list film-card__button" type="button" onClick={onInMyListButtonClick}>
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref={`${film.isFavorite ? '#in-list' : '#add'}`}></use>
            </svg>
            <span>My list</span>
          </button>}
        {isAuthorized && children}
      </div>
    </div>
  );
}

export default FilmDescription;

