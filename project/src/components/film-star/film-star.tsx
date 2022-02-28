import React, { useState, FormEvent, ChangeEvent } from 'react';

type PropsTypes = {
  id: number;
  rating: number;
  onRadioChange: () => void;
};

function FilmStar({ rating, id, onRadioChange }: PropsTypes): JSX.Element {
  const [state, setState] = useState(false);

  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${id}`} type="radio" name="rating" value={id} onChange={onRadioChange} checked={state} />
      <label className="rating__label" htmlFor="star-10">Rating 10</label>
    </React.Fragment>


  );
}

export default FilmStar;
