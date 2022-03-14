import { MouseEventHandler, useState } from 'react';
import { FilmsDataType } from '../../types/film-type';
import FilmTabs from '../../film-tabs/film-tabs';
import FilmsList from '../film-list/film-list';

type PropsTypes = {
  mocks: FilmsDataType;
};

const getFilmGenres = (mocks: FilmsDataType): string[] => {
  const genres = new Set<string>();
  mocks.forEach((mock) => genres.add(mock.genre));

  return ([...genres.keys()]);
};

function FilmsMainCatalog({ mocks }: PropsTypes): JSX.Element {

  const genres = getFilmGenres(mocks);
  const [activeTab, setActiveTab] = useState(genres[0]);

  //todo: нужно как-то убрать это в HOC/HOF
  const tabChangeHandler: MouseEventHandler = (evt) => {
    const target = evt.target as HTMLAnchorElement;
    const tagName = target.tagName;
    const tagText = target.textContent;

    if ((tagName === 'A') && (activeTab !== tagText)) {
      setActiveTab(tagText ? tagText : '');
    }
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmTabs textContent={genres} className={'catalog__genres-'} tabChangeHandler={tabChangeHandler} activeTab={activeTab} />
      {/* <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <NavLink to="#" className="catalog__genres-link">All genres</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Comedies</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Crime</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Documentary</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Dramas</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Horror</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Kids & Family</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Romance</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Sci-Fi</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink to="#" className="catalog__genres-link">Thrillers</NavLink >
        </li>
      </ul> */}

      <FilmsList mocks={mocks} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default FilmsMainCatalog;
