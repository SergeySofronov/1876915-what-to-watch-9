import { CommentsDataType, CommentType } from '../../types/comment-type';
import { FilmType } from '../../types/film-type';
import { getRgbaColor } from '../../utils';

type PropsTypes = {
  film: FilmType;
  comments: CommentsDataType;
};

const getCommentComponent = (comment: CommentType, color: string) => {
  const date = new Date(comment.date);
  return (
    <div key={comment.id} className="review" style={{ borderColor: color }}>
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{`${date.getMonth()} ${date.getDay()}, ${date.getFullYear()}`}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );
};

function MoviePageReviews({ film, comments }: PropsTypes): JSX.Element {

  const halfLength = Math.round(comments.length / 2);
  const firstPart = comments.slice(0, halfLength);
  const secondPart = comments.slice(halfLength);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstPart.map((comment) => getCommentComponent(comment, getRgbaColor(film.backgroundColor, 0.5)))}
      </div>
      <div className="film-card__reviews-col">
        {secondPart.map((comment) => getCommentComponent(comment, getRgbaColor(film.backgroundColor, 0.5)))}
      </div>
    </div>
  );
}

export default MoviePageReviews;
