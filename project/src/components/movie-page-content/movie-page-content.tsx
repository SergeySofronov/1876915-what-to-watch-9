import { memo, useEffect, useState } from 'react';
import { FilmType } from '../../types/film-type';
import { CommentsDataType } from '../../types/comment-type';
import { FILM_TAB_NAMES } from '../../const';
import { useFilmReviewsSelector } from '../../hooks/selectors';
import FilmTabs from '../film-tabs/film-tabs';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';

type PropsTypes = {
  film: FilmType;
};

const getTabContent = (activeTab: string, film: FilmType, comments: CommentsDataType) => {
  const [overview, details, reviews] = FILM_TAB_NAMES;
  switch (activeTab) {
    case overview:
      return <MoviePageOverview film={film} />;
    case details:
      return <MoviePageDetails film={film} />;
    case reviews:
      return <MoviePageReviews film={film} comments={comments} />;
  }
};

function MoviePageContent({ film }: PropsTypes): JSX.Element {
  const [activeTab, setActiveTab] = useState(FILM_TAB_NAMES[0]);
  const activeFilmReviews = useFilmReviewsSelector();

  useEffect(() => setActiveTab(FILM_TAB_NAMES[0]), [film]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <FilmTabs
          textContent={FILM_TAB_NAMES}
          className={'film-nav__'}
          tabChangeHandler={(tabName) => setActiveTab(tabName)}
          activeTab={activeTab}
        />
      </nav>
      {getTabContent(activeTab, film, activeFilmReviews)}
    </div>
  );
}

export default memo(MoviePageContent);
