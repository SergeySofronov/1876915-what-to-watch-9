import { useState, FormEvent, ChangeEvent, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { USER_REVIEW_LENGTH_MAX, USER_REVIEW_LENGTH_MIN } from '../../const';
import { sendFilmReview } from '../../store/api-actions';
import { FilmType } from '../../types/film-type';
import FilmStars from '../film-stars/film-stars';

type PropsTypes = {
  film: FilmType;
};


function ReviewForm({ film }: PropsTypes): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const id = film.id;

  const onStarChange = useCallback((rating: number) => setReviewRating(rating), []);

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
    }
    target.setCustomValidity(message);
    target.reportValidity();
    setReviewText(target.value.trim());
  };

  const isButtonDisabled = () => Boolean(!reviewRating) || Boolean(!reviewText) || (!textAreaRef.current?.validity.valid);

  return (
    <div className="add-review" >
      <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
        <div className="rating">
          <FilmStars rating={reviewRating} onChange={onStarChange} />
        </div>

        <div className="add-review__text" style={{ backgroundColor: 'whitesmoke' }}>
          <textarea ref={textAreaRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={onTextAreaChange} minLength={USER_REVIEW_LENGTH_MIN} maxLength={USER_REVIEW_LENGTH_MAX}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isButtonDisabled()}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;


