import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpInternalServerError';

/**
 * Server status 500
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */
export class HttpInternalServerError extends HttpServerException {
  static readonly STATUS = 500;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 500, msgOrParams));
    Object.setPrototypeOf(this, HttpInternalServerError.prototype);
    this.name = className;
  }
}
