import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpTooManyRequests';

/**
 * Client status 429
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */
export class HttpTooManyRequests extends HttpClientException {
  static readonly STATUS = 429;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 429, msgOrParams));
    Object.setPrototypeOf(this, HttpTooManyRequests.prototype);
    this.name = className;
  }
}
