import request from 'axios';
import { toast } from 'react-toastify';
import { ErrorType } from '../types/error';
import { HttpErrorCode } from '../const';

const handleHttpError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpErrorCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HttpErrorCode.UnAuthorized:
        toast.info(response.data.error);
        break;
      case HttpErrorCode.NotFound:
        toast.info(response.data.error);
        break;
    }
  }
};

export { handleHttpError };
