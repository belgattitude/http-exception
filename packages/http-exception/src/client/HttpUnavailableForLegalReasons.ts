import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUnavailableForLegalReasons';

/**
 * Client status 451
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */
export class HttpUnavailableForLegalReasons extends HttpClientException {
  static readonly STATUS = 451;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 451, msgOrParams));
    Object.setPrototypeOf(this, HttpUnavailableForLegalReasons.prototype);
    this.name = className;
  }
}
