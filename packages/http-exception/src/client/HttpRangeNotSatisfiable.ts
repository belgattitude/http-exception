import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpRangeNotSatisfiable';

/**
 * Client status 416
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */
export class HttpRangeNotSatisfiable extends HttpClientException {
  static readonly STATUS = 416;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 416, msgOrParams));
    Object.setPrototypeOf(this, HttpRangeNotSatisfiable.prototype);
    this.name = className;
  }
}
