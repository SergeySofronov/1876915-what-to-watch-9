import { ForwardedRef, forwardRef, memo, useEffect, useRef } from 'react';
import { FilmType } from '../../types/film-type';
import { VIDEO_PREVIEW_DELAY } from '../../const';

type PropsTypes = {
  film: FilmType;
  isActiveFilm?: boolean;
  isFullPlayer?: boolean;
};

function VideoPlayer({ film, isActiveFilm = true, isFullPlayer = false }: PropsTypes, ref: ForwardedRef<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let delay: NodeJS.Timeout;

    if (!videoRef.current) {
      return;
    }

    isActiveFilm ? delay = setTimeout(() => videoRef.current?.play(), VIDEO_PREVIEW_DELAY) : videoRef.current.load();

    return () => clearTimeout(delay);

  }, [isActiveFilm]);

  return (
    <video
      ref={ref ? ref : videoRef}
      src={film.previewVideoLink}
      className="player__video"
      poster={film.previewImage}
      preload={'auto'}
      loop={!isFullPlayer}
      muted={!isFullPlayer}
    />
  );
}

export default memo(forwardRef(VideoPlayer));
