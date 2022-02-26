import { FILM_QUANTITY } from '../../const';
import { NavLink  } from 'react-router-dom';
import FilmCard from '../film-card/film-card';

function FilmsMainCatalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <NavLink  to="#" className="catalog__genres-link">All genres</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Comedies</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Crime</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Documentary</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Dramas</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Horror</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Kids & Family</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Romance</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Sci-Fi</NavLink >
        </li>
        <li className="catalog__genres-item">
          <NavLink  to="#" className="catalog__genres-link">Thrillers</NavLink >
        </li>
      </ul>

      <div className="catalog__films-list">
        {Array.from({ length: FILM_QUANTITY }, FilmCard)}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default FilmsMainCatalog;
