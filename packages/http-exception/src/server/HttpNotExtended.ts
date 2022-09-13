import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotExtended';

/**
 * 510 Not Extended (server)
 *
 * Further extensions to the request are required for the server to fulfill it.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510
 * @see https://httpstatus.in/510/
 */
export class HttpNotExtended extends HttpServerException {
  static readonly STATUS = 510;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 510, msgOrParams));
    Object.setPrototypeOf(this, HttpNotExtended.prototype);
    this.name = className;
  }
}
