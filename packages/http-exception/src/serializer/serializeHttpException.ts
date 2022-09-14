import { HttpException } from '../base';
import type { SerializedError } from './serializeNativeError';
import { isNativeError, serializeNativeError } from './serializeNativeError';

export type SerializedHttpException = SerializedError & {
  statusCode: number;
  url: string | null;
};

export const serializeHttpException = (
  httpException: HttpException
): SerializedHttpException => {
  const {
    name,
    message = null,
    statusCode,
    url = null,
    stack = null,
    cause = null,
  } = httpException;
  let c: SerializedError | SerializedHttpException | null = null;
  if (cause instanceof HttpException) {
    c = serializeHttpException(cause);
  } else if (isNativeError(cause)) {
    c = serializeNativeError(cause);
  }
  return {
    __type: name,
    __version: 1,
    message,
    statusCode,
    url,
    stack,
    cause: c,
  };
};
