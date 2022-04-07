import { useParams } from 'react-router-dom';
import { useFilmsDataSelector } from './selectors';

const useSearchFilmById = (id?: number) => {
  const idFromUrl = Number(useParams().id);
  const resultId = id ? id : idFromUrl;
  const films = useFilmsDataSelector();

  return { film: films.find((filmItem) => filmItem.id === resultId), id: resultId };
};

export { useSearchFilmById };
