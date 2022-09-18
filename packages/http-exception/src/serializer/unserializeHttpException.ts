import * as Http from 'http';
import type { HttpException } from '../base';
import { createHttpException } from '../factory';
import type { SerializableHttpException } from './types';

export const unserializeHttpException = (
  serializedHttpException: string
): HttpException | null => {
  let deserialized: SerializableHttpException;
  try {
    deserialized = JSON.parse(serializedHttpException);
  } catch (e) {
    return null;
  }
  const type = deserialized?.['__type'] ?? '';
  const { statusCode, message, url, stack, cause } = deserialized ?? {};
  // cause
  console.log('cause', cause);
  const c = cause ? unserializeHttpException(JSON.stringify(cause)) : null;

  let e: HttpException | null = null;
  // @todo do the real thing
  if (type.startsWith('Http')) {
    e = createHttpException(statusCode, {
      message: message ?? undefined,
      url: url ?? undefined,
      cause: c ?? undefined,
    });
    if (stack) {
      e.stack = stack;
    }
  }
  return e;
};
