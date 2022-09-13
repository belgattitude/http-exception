import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

/**
 * Client status 417
 *
 * @see https://httpstatus.in/417/
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */
export class HttpExpectationFailed extends HttpClientException {
  static readonly STATUS = 417;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    const className = 'ExpectationFailed';
    super(getSuper(className, 417, msgOrParams));
    Object.setPrototypeOf(this, HttpExpectationFailed.prototype);
    this.name = `Http${className}`;
  }
}
