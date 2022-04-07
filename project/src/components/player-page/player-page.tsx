import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { PlayerState, PLAYER_PROGRESS_MAX, PLAYER_PROGRESS_MIN, PLAYER_PROGRESS_UPDATE_INTERVAL, SECONDS_IN_MINUTE, VideoLoadingState } from '../../const';
import { useSearchFilmById } from '../../hooks/search-film-by-id';
import { getDurationString, getFilmDuration } from '../../utils';
import NotFoundPage from '../not-found-page/not-found-page';
import VideoPlayer from '../video-player/video-player';

const goBack = () => window.history.back();

function PlayerPage(): JSX.Element {
  const { film } = useSearchFilmById();
  const [playerState, setPlayerState] = useState(PlayerState.Stop);
  const [loadingState, setVideoLoading] = useState(VideoLoadingState.Unknown);
  const [duration, setDuration] = useState(getFilmDuration((film?.runTime || 0) * SECONDS_IN_MINUTE));
  const progressRef = useRef<HTMLProgressElement>(null);
  const togglerRef = useRef<HTMLDivElement>(null);
  const videoRef = createRef<HTMLVideoElement>();

  const getRestTime = useCallback(() => videoRef.current ? Math.trunc(Math.abs(videoRef.current.currentTime - videoRef.current.duration)) : 0, [videoRef]);

  const onProgressChange = () => {
    if (progressRef.current && videoRef.current && togglerRef.current && (loadingState === VideoLoadingState.Done)) {
      progressRef.current.value = Math.round(videoRef.current.currentTime * 100 / videoRef.current.duration);
      togglerRef.current.style.left = `${Math.round(videoRef.current.currentTime * 100 / videoRef.current.duration)}%`;
      setDuration(getFilmDuration(getRestTime()));
    }
  };

  const setProgress = (value: number) => {
    if (progressRef.current && togglerRef.current) {
      progressRef.current.value = value;
      togglerRef.current.style.left = `${value}%`;
    }
  };

  const onExitButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    goBack();
  };

  let interval;
  if (playerState === PlayerState.Play) {
    interval = setInterval(onProgressChange, PLAYER_PROGRESS_UPDATE_INTERVAL);
  } else {
    clearInterval(interval);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onplay = () => setPlayerState(PlayerState.Play);
      video.onpause = () => setPlayerState(PlayerState.Pause);
      video.onwaiting = () => setVideoLoading(VideoLoadingState.Pending);
      video.oncanplay = () => setVideoLoading(VideoLoadingState.Done);
      video.ondurationchange = () => setDuration(getFilmDuration(getRestTime()));
      video.onended = () => {
        setPlayerState(PlayerState.Stop);
        setProgress(PLAYER_PROGRESS_MAX);
      };
    }
  }, [videoRef, playerState, getRestTime]);

  const onPlayButtonClick = () => {
    playerState === PlayerState.Play ?
      videoRef.current?.pause() :
      videoRef.current?.play();
    if (playerState === PlayerState.Stop) {
      setProgress(PLAYER_PROGRESS_MIN);
    }
  };

  const onFullScreenButtonClick = () => videoRef.current?.requestFullscreen();

  if (!film) {
    return <NotFoundPage />;
  }

  return (


    <div className="player">
      {(loadingState === VideoLoadingState.Pending) &&
        <div className="spin-wrapper" >
          <div className="spinner" >
          </div>
        </div>}
      <VideoPlayer film={film} ref={videoRef} isFullPlayer />
      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress ref={progressRef} className="player__progress" value={PLAYER_PROGRESS_MIN} max={PLAYER_PROGRESS_MAX}></progress>
            <div ref={togglerRef} className="player__toggler" style={{ left: `${PLAYER_PROGRESS_MIN}%` }}>Toggler</div>
          </div>
          <div className="player__time-value" >{`${getDurationString(duration)}`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={`${playerState === PlayerState.Play ? '#pause' : '#play-s'} `}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name" >{film.name}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div >
  );
}

export default PlayerPage;
