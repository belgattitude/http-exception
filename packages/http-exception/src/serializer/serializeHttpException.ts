import type { HttpException } from '../base';
import { serializeCause } from './serializeCause';
import type { SerializableHttpException } from './types';

const getSerializableHttpException = (
  httpException: HttpException
): SerializableHttpException => {
  const {
    name,
    message = null,
    statusCode,
    url = null,
    stack = null,
    cause = null,
  } = httpException;
  return {
    __type: name,
    __version: 1,
    name,
    message,
    statusCode,
    url,
    stack,
    cause: cause instanceof Error ? serializeCause(cause) : null,
  };
};

export const serializeHttpException = (
  httpException: HttpException
): string => {
  return JSON.stringify(getSerializableHttpException(httpException));
};
