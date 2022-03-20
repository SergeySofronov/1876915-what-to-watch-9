import { FilmsDataType } from '../../types/film-type';
import { FILM_GENRE_DEFAULT, FILM_MAIN_PAGE_MAX } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveFilmGenre } from '../../store/action';
import FilmTabs from '../../film-tabs/film-tabs';
import FilmsList from '../film-list/film-list';
import ShowMoreButton from '../../show-more-button/show-more-button';
import { useState } from 'react';

type PropsTypes = {
  mocks: FilmsDataType;
};


const getAllFilmGenres = (mocks: FilmsDataType): string[] => {
  const genres = new Set<string>([FILM_GENRE_DEFAULT]);
  mocks.forEach((mock) => genres.add(mock.genre));

  return ([...genres.keys()]);
};

const getFilmsByGenre = (films: FilmsDataType, activeTab: string) => activeTab === FILM_GENRE_DEFAULT ? films : films.filter((film) => (film.genre === activeTab));
const getMaxQuantityToShow = (films: FilmsDataType) => films.length > FILM_MAIN_PAGE_MAX ? FILM_MAIN_PAGE_MAX : films.length;
const getFilteredFilmsQuantity = (films: FilmsDataType, activeTab: string) => getMaxQuantityToShow(getFilmsByGenre(films, activeTab));

const isButtonStatusChanged = (films: FilmsDataType, tabName: string) => {
  const filteredFilms = getFilmsByGenre(films, tabName);

  return filteredFilms.length > getMaxQuantityToShow(filteredFilms);
};

function FilmsMainCatalog({ mocks }: PropsTypes): JSX.Element {
  const dispatch = useAppDispatch();
  const genres = getAllFilmGenres(mocks);
  const activeTab = useAppSelector((state) => state.activeFilmGenre);
  const [shownFilmsQuantity, setFilmQuantity] = useState(getFilteredFilmsQuantity(mocks, activeTab));
  const [isButtonShown, setButtonStatus] = useState(isButtonStatusChanged(mocks, activeTab));

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmTabs
        textContent={genres}
        className={'catalog__genres-'}
        tabChangeHandler={(tabName) => {
          setButtonStatus(isButtonStatusChanged(mocks, tabName));
          setFilmQuantity(getFilteredFilmsQuantity(mocks, tabName));
          dispatch(setActiveFilmGenre({ activeFilmGenre: tabName }));
        }}
        activeTab={activeTab}
      />
      <FilmsList mocks={getFilmsByGenre(mocks, activeTab).slice(0, shownFilmsQuantity)} />

      {
        isButtonShown &&
        <ShowMoreButton
          buttonClickHandler={() => {
            let rest = getFilmsByGenre(mocks, activeTab).length - shownFilmsQuantity;

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
