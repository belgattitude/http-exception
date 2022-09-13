import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

/**
 * 413 Payload too large (client)
 *
 * Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 * @see https://httpstatus.in/413/
 */
export class HttpPayloadTooLarge extends HttpClientException {
  static readonly STATUS = 413;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    const className = 'PayloadTooLarge';
    super(getSuper(className, 413, msgOrParams));
    Object.setPrototypeOf(this, HttpPayloadTooLarge.prototype);
    this.name = `Http${className}`;
  }
}
