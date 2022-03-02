import React from 'react';

type PropsTypes = {
  rating: number;
  index: number;
};

function FilmStar({ rating, index }: PropsTypes): JSX.Element {
  const isChecked = (Math.floor(rating) === index);

  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} defaultChecked={isChecked} />
      <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
    </React.Fragment>
  );
}

export default FilmStar;
