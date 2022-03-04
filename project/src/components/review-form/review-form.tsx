import { useState, FormEvent, ChangeEvent } from 'react';
import { FilmType } from '../../types/film-type';
import { FILM_RATING_MAX } from '../../const';
import FilmStar from '../film-star/film-star';

type PropsTypes = {
  film: FilmType;
};

function ReviewForm({ film }: PropsTypes): JSX.Element {
  const [textState, setText] = useState('');
  const ratingStars = [...Array(FILM_RATING_MAX)].map((item: JSX.Element, index: number) => <FilmStar rating={film.rating} index={FILM_RATING_MAX-index} key={String(index)} />);

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const onTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {ratingStars}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={textState} onChange={onTextAreaChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" >Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
