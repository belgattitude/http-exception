import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpGone';

/**
 * Client status 410
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */
export class HttpGone extends HttpClientException {
  static readonly STATUS = 410;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 410, msgOrParams));
    Object.setPrototypeOf(this, HttpGone.prototype);
    this.name = className;
  }
}
