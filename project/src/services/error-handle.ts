import request from 'axios';
import { store } from '../store';
import { ErrorType } from '../types/error';
import { setHttpError } from '../store/action';
import { HttpErrorCode } from '../const';
import { clearHttpError } from '../store/api-actions';

const handleHttpError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setHttpError(message));
    store.dispatch(clearHttpError());
  };

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpErrorCode.BadRequest:
        handleError(response.data.error);
        break;
      case HttpErrorCode.UnAuthorized:
        handleError(response.data.error);
        break;
      case HttpErrorCode.NotFound:
        handleError(response.data.error);
        break;
    }
  }
};

export { handleHttpError };
