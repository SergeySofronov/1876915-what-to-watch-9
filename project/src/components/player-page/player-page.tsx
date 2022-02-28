import { useNavigate, useParams } from 'react-router-dom';
import { FilmsDataType } from '../../types/film-type';
import { AppRoute, MINUTES_IN_HOUR } from '../../const';
import NotFoundPage from '../not-found-page/not-found-page';

type PropsTypes = {
  mocks: FilmsDataType;
};

function PlayerPage({ mocks }: PropsTypes): JSX.Element {
  const navigate = useNavigate();
  const id = Number(useParams().id);
  const film = mocks.find((mock) => mock.id === id);
  if (!film) {
    return <NotFoundPage />;
  }

  const hours = Math.floor(film.runTime / MINUTES_IN_HOUR);
  const minutes = film.runTime % MINUTES_IN_HOUR;
  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster={film?.posterImage}></video>

      <button type="button" className="player__exit" onClick={() => navigate(AppRoute.Main)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{`${hours}:${minutes}:00`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film?.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
