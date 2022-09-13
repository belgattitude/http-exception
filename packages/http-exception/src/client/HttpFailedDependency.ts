import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpFailedDependency';

/**
 * Http client status 424 (webdav specific)
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
 */
export class HttpFailedDependency extends HttpClientException {
  static readonly STATUS = 424;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 424, msgOrParams));
    Object.setPrototypeOf(this, HttpFailedDependency.prototype);
    this.name = className;
  }
}
