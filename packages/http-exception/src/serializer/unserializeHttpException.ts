import type { HttpException } from '../base';
import { createHttpException } from '../factory';
import type { SerializedHttpException } from './serializeHttpException';
import {
  isNativeError,
  SerializedError,
  serializeNativeError,
} from './serializeNativeError';

export const unserializeHttpException = (
  serializedHttpException: string
): HttpException | null => {
  const deserialized = JSON.parse(
    serializedHttpException
  ) as SerializedHttpException;
  const { __type, statusCode, message, url, stack, cause } = deserialized;
  let e: HttpException | null = null;
  if (__type.startsWith('Http')) {
    e = createHttpException(statusCode, {
      message: message ?? undefined,
      url: url ?? undefined,
    });
    if (stack) {
      e.stack = stack;
    }
  }
  return e;
};
