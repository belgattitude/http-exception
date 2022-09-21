import { supportsErrorCause } from '../support';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

export class HttpException extends Error {
  /**
   * Http error status code (400-599)
   */
  public readonly statusCode: number;
  /**
   * Indicates the original url that caused the error.
   */
  public readonly url: string | undefined;

  /**
   * If set and the runtime (browser or node) supports it
   * you can get back the error cause
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause
   */
  public readonly cause?: Error;

  /**
   * Construct a new HttpException class
   *
   * @param statusCode http status code between 400-599, no checks are done on the validity of the number.
   * @param msgOrParams either a message or an object containing HttpExceptionParams
   */
  constructor(statusCode: number, msgOrParams?: HttpExceptionParams | string) {
    const name = 'HttpException';
    const { message, url, cause } = getSuper(name, msgOrParams);
    if (supportsErrorCause() && cause) {
      super(message, { cause });
    } else {
      super(message);
    }
    this.url = url;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpException.prototype);
    this.name = name;
  }
}
