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
   * @param {number} statusCode
   * @param {HttpExceptionParams | string} msgOrParams
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
