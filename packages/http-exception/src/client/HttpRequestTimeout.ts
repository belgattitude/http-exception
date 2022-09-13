import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpRequestTimeout';

/**
 * Client status 408
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
 */
export class HttpRequestTimeout extends HttpClientException {
  static readonly STATUS = 408;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 408, msgOrParams));
    Object.setPrototypeOf(this, HttpRequestTimeout.prototype);
    this.name = className;
  }
}
