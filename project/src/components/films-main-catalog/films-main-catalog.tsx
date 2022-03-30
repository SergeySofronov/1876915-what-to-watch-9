import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilmsDataType } from '../../types/film-type';
import { setActiveFilmGenre } from '../../store/action';
import { useActiveFilmSelector } from '../../hooks/selectors';
import { FILM_GENRE_DEFAULT, FILM_MAIN_PAGE_MAX } from '../../const';
import FilmTabs from '../film-tabs/film-tabs';
import FilmsList from '../film-list/film-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type PropsTypes = {
  films: FilmsDataType;
};


const getAllFilmGenres = (films: FilmsDataType): string[] => {
  const genres = new Set<string>([FILM_GENRE_DEFAULT]);
  films.forEach((film) => genres.add(film.genre));

  return ([...genres.keys()]);
};

const getFilmsByGenre = (films: FilmsDataType, activeTab: string) => activeTab === FILM_GENRE_DEFAULT ? films : films.filter((film) => (film.genre === activeTab));
const getMaxQuantityToShow = (films: FilmsDataType) => films.length > FILM_MAIN_PAGE_MAX ? FILM_MAIN_PAGE_MAX : films.length;
const getFilteredFilmsQuantity = (films: FilmsDataType, activeTab: string) => getMaxQuantityToShow(getFilmsByGenre(films, activeTab));

const isButtonStatusChanged = (films: FilmsDataType, tabName: string) => {
  const filteredFilms = getFilmsByGenre(films, tabName);

  return filteredFilms.length > getMaxQuantityToShow(filteredFilms);
};

function FilmsMainCatalog({ films }: PropsTypes): JSX.Element {
  const dispatch = useDispatch();
  const activeTab = useActiveFilmSelector();
  const genres = getAllFilmGenres(films);
  const [shownFilmsQuantity, setFilmQuantity] = useState(getFilteredFilmsQuantity(films, activeTab));
  const [isButtonShown, setButtonStatus] = useState(isButtonStatusChanged(films, activeTab));

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmTabs
        textContent={genres}
        className={'catalog__genres-'}
        tabChangeHandler={(tabName) => {
          setButtonStatus(isButtonStatusChanged(films, tabName));
          setFilmQuantity(getFilteredFilmsQuantity(films, tabName));
          dispatch(setActiveFilmGenre(tabName));
        }}
        activeTab={activeTab}
      />
      <FilmsList films={getFilmsByGenre(films, activeTab).slice(0, shownFilmsQuantity)} />

      {
        isButtonShown &&
        <ShowMoreButton
          buttonClickHandler={() => {
            let rest = getFilmsByGenre(films, activeTab).length - shownFilmsQuantity;

            if (rest > 0) {
              setButtonStatus(rest > FILM_MAIN_PAGE_MAX);
              rest = rest < FILM_MAIN_PAGE_MAX ? rest : FILM_MAIN_PAGE_MAX;
              rest += shownFilmsQuantity;
              setFilmQuantity(rest);
            }
          }}
        />
      }
    </section>
  );
}

export default FilmsMainCatalog;
