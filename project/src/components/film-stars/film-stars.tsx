import React, { memo, useEffect, useRef } from 'react';
import { FILM_RATING_MAX, FILM_RATING_MIN } from '../../const';

type PropsTypes = {
  rating: number;
  onChange: (value: number) => void;
};

function FilmStars({ rating, onChange }: PropsTypes): JSX.Element {
  const hiddenInput = useRef<HTMLInputElement>(null);
  let index = FILM_RATING_MIN - 1;

  useEffect(() => {
    if (hiddenInput.current) {
      hiddenInput.current.setCustomValidity(`Please put film's rating from ${FILM_RATING_MIN} to ${FILM_RATING_MAX}`);
      hiddenInput.current.reportValidity();
    }
  }, []);

  return (
    <div className="rating__stars">
      <input ref={hiddenInput} style={{ height: '0px', width: '0px', alignSelf: 'end', visibility: 'hidden' }} />
      {Array.from({ length: FILM_RATING_MAX },
        () => {
          index++;
          return (
            <React.Fragment key={String(index)}>
              <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} defaultChecked={Math.floor(rating) === index} onChange={(evt) => onChange(Number(evt.target.value))} />
              <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
            </React.Fragment>
          );
        }).reverse()}
    </div>
  );
}

export default memo(FilmStars);
