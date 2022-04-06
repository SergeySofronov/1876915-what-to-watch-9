import React, { memo, RefObject, useEffect, useRef, useState } from 'react';
import { FILM_RATING_MAX, FILM_RATING_MIN } from '../../const';

const checkValidity = (element: RefObject<HTMLInputElement>, rating: number) => {
  let message = '';
  if (element.current) {
    if (rating < FILM_RATING_MIN) {
      message = `Please put film's rating from ${FILM_RATING_MIN} to ${FILM_RATING_MAX}`;
    }
    element.current.setCustomValidity(message);
    element.current.reportValidity();
  }
};

type PropsTypes = {
  rating: number;
  onChange: (value: number) => void;
};

function FilmStars({ rating, onChange }: PropsTypes): JSX.Element {
  const [currentRating, setRating] = useState(rating);
  const hiddenInput = useRef<HTMLInputElement>(null);
  let index = FILM_RATING_MIN - 1;

  useEffect(() => {
    checkValidity(hiddenInput, currentRating);
  }, [currentRating]);

  return (
    <div className="rating__stars">
      <input ref={hiddenInput} name="hidden" style={{ height: '0px', width: '0px', alignSelf: 'end', visibility: 'hidden' }} />
      {Array.from({ length: FILM_RATING_MAX },
        () => {
          index++;
          return (
            <React.Fragment key={String(index)}>
              <input
                className="rating__input"
                id={`star-${index}`}
                type="radio"
                name="rating"
                value={index}
                defaultChecked={Math.floor(rating) === index}
                onChange={(evt) => {
                  const value = Number(evt.target.value);
                  onChange(value);
                  setRating(value);
                }}
              />
              <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
            </React.Fragment>
          );
        }).reverse()}
    </div>
  );
}

export default memo(FilmStars);
