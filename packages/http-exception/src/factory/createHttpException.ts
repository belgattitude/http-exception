import { HttpClientException, HttpServerException } from '../base';
import { statusMap } from '../status';
import { isHttpErrorStatusCode } from '../typeguards';
import type { HttpExceptionParams } from '../types';

export const createHttpException = (
  statusCode: number,
  msgOrParams?: string | HttpExceptionParams
): HttpServerException | HttpClientException | null => {
  if (isHttpErrorStatusCode(statusCode)) {
    const cls =
      statusMap?.[`${statusCode}` as unknown as keyof typeof statusMap];
    if (cls) {
      return new cls(msgOrParams);
    }
    return statusCode < 500
      ? new HttpClientException(statusCode, msgOrParams)
      : new HttpServerException(statusCode, msgOrParams);
  }
  return null;
};
