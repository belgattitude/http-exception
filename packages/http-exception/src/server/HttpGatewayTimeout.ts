import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpGatewayTimeout';

/**
 * Server status 504
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
export class HttpGatewayTimeout extends HttpServerException {
  static readonly STATUS = 504;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 504, msgOrParams));
    Object.setPrototypeOf(this, HttpGatewayTimeout.prototype);
    this.name = className;
  }
}
