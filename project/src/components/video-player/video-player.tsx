import { FilmType } from '../../types/film-type';
import { useEffect, useRef } from 'react';
import { VIDEO_PREVIEW_DELAY } from '../../const';

type PropsTypes = {
  film: FilmType;
  isActiveFilm: boolean;
};

function VideoPlayer({ film, isActiveFilm = false }: PropsTypes): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      ref={videoRef}
      src={film.previewVideoLink}
      className="player__video"
      poster={film.previewImage}
      preload={'auto'}
      loop
      muted
    >
    </video>
  );
}

export default VideoPlayer;
