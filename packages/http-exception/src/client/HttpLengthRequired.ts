import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

/**
 * 411 Length required
 *
 * Server rejected the request because the Content-Length header field is not defined and the server requires it.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 * @see https://httpstatus.in/411/
 */
export class HttpLengthRequired extends HttpClientException {
  static readonly STATUS = 411;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    const className = 'LengthRequired';
    super(getSuper(className, 411, msgOrParams));
    Object.setPrototypeOf(this, HttpLengthRequired.prototype);
    this.name = `Http${className}`;
  }
}
