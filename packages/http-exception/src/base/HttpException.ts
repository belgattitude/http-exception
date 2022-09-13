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
   * Construct a new HttpException class
   *
   * @param statusCode http status code between 400-599, no checks are done on the validity of the number.
   * @param msgOrParams either a message or an object containing HttpExceptionParams
   */
  constructor(statusCode: number, msgOrParams?: HttpExceptionParams | string) {
    const name = 'HttpException';
    const { message, url, cause } = getSuper(name, msgOrParams);
    if (cause) {
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
