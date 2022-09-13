import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpProxyAuthenticationRequired';

/**
 * Client status 407
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */
export class HttpProxyAuthenticationRequired extends HttpClientException {
  static readonly STATUS = 407;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 407, msgOrParams));
    Object.setPrototypeOf(this, HttpProxyAuthenticationRequired.prototype);
    this.name = className;
  }
}
