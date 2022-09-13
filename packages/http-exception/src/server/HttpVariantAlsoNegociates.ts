import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpVariantAlsoNegociates';

/**
 * Server status 506
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
 */
export class HttpVariantAlsoNegociates extends HttpServerException {
  static readonly STATUS = 506;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 506, msgOrParams));
    Object.setPrototypeOf(this, HttpVariantAlsoNegociates.prototype);
    this.name = className;
  }
}
