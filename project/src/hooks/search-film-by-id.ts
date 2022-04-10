import { useParams } from 'react-router-dom';
import { FilmsDataType, FilmType } from '../types/film-type';
import { useFilmsDataSelector } from '../store/selectors';

const useSearchFilmById = (id?: number) => {
  const idFromUrl = Number(useParams().id);
  const resultId = id ? id : idFromUrl;
  const films: FilmsDataType = useFilmsDataSelector();

  return { film: films.find((filmItem: FilmType) => filmItem.id === resultId), id: resultId };
};

export { useSearchFilmById };
