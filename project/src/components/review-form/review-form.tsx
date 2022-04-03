import React, { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FilmType } from '../../types/film-type';
import { FILM_RATING_MAX, FILM_RATING_MIN, USER_REVIEW_LENGTH_MAX, USER_REVIEW_LENGTH_MIN } from '../../const';
import FilmStar from '../film-star/film-star';
import { sendFilmReview } from '../../store/api-actions';

type PropsTypes = {
  film: FilmType;
};


function ReviewForm({ film }: PropsTypes): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const ratingStars = [...Array(FILM_RATING_MAX)].map((item: JSX.Element, index: number) => <FilmStar rating={reviewRating} index={FILM_RATING_MAX - index} key={String(index)} onChange={(rating: number) => setReviewRating(rating)} />);
  const dispatch = useDispatch();
  const id = film.id;

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendFilmReview({ id, comment: reviewText, rating: reviewRating }));
    setReviewRating(film.rating);
    setReviewText('');
  };

  const onTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const target = evt.target;
    const validity = target.validity;
    let message = '';

    if (validity.tooLong) {
      target.value = target.value.slice(0, target.maxLength);
      message = `Review text is ${USER_REVIEW_LENGTH_MAX} length max.`;
    } else if (validity.tooShort) {
      message = `Review text too short. ${USER_REVIEW_LENGTH_MIN - target.value.length} symbols remained.`;
    } else if (reviewRating < FILM_RATING_MIN) {
      message = `Please put film's rating from ${FILM_RATING_MIN} to ${FILM_RATING_MAX}`;
    }
    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = !(validity.valid && target.value);
    }
    target.setCustomValidity(message);
    target.reportValidity();
    setReviewText(target.value);
  };

  return (
    <div className="add-review" >
      <form ref={formRef} action="#" className="add-review__form" onSubmit={onFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {ratingStars}
          </div>
        </div>

        <div className="add-review__text" style={{ backgroundColor: 'whitesmoke' }}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={onTextAreaChange} minLength={USER_REVIEW_LENGTH_MIN} maxLength={USER_REVIEW_LENGTH_MAX}></textarea>
          <div className="add-review__submit">
            <button ref={submitButtonRef} className="add-review__btn" type="submit" disabled>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;


