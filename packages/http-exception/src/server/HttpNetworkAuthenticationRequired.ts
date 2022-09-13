import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNetworkAuthenticationRequired';

/**
 * Server status 511
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
 */
export class HttpNetworkAuthenticationRequired extends HttpServerException {
  static readonly STATUS = 511;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 511, msgOrParams));
    Object.setPrototypeOf(this, HttpNetworkAuthenticationRequired.prototype);
    this.name = className;
  }
}
