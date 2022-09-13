import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpInsufficientStorage';

/**
 * 507 Insufficient Storage (client / webdav specific)
 *
 * The method could not be performed on the resource because the server is unable to store the representation
 * needed to successfully complete the request.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507
 */
export class HttpInsufficientStorage extends HttpServerException {
  static readonly STATUS = 507;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 507, msgOrParams));
    Object.setPrototypeOf(this, HttpInsufficientStorage.prototype);
    this.name = className;
  }
}
