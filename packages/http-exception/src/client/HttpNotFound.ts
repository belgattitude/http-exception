import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotFound';

/**
 * Client status 404
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
 */
export class HttpNotFound extends HttpClientException {
  static readonly STATUS = 404;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 404, msgOrParams));
    Object.setPrototypeOf(this, HttpNotFound.prototype);
    this.name = className;
  }
}
