import { HttpException } from '../base';
import { serializeHttpException } from './serializeHttpException';
import { serializeNativeError } from './serializeNativeError';
import { isNativeError } from './typeguard/isNativeError';
import type { SerializableHttpException, SerializableError } from './types';
import type { SerializableCause } from './types/SerializableCause';

export const serializeCause = (
  cause: Error | HttpException
): SerializableCause | null => {
  let c: SerializableError | SerializableHttpException | null = null;
  if (cause instanceof HttpException) {
    c = serializeHttpException(cause);
  } else if (isNativeError(cause)) {
    c = serializeNativeError(cause);
  }
  return c;
};
