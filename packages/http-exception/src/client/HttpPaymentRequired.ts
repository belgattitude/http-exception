import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpPaymentRequired';

/**
 * 402 Payment required (client)
 *
 * This response code is reserved for future use. The initial aim for creating this code was using it for digital
 * payment systems, however this status code is used very rarely and no standard convention exists.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 * @see https://httpstatus.in/402/
 */

export class HttpPaymentRequired extends HttpClientException {
  static readonly STATUS = 402;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 402, msgOrParams));
    Object.setPrototypeOf(this, HttpPaymentRequired.prototype);
    this.name = className;
  }
}
