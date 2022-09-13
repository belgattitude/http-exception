import type { HttpExceptionParamsWithStatus } from '../types';

export class HttpException extends Error {
  /**
   * Http error status code (400-599)
   */
  public readonly statusCode: number;
  /**
   * Indicates the original url that caused the error.
   */
  public readonly url: string | undefined;

  constructor(params: HttpExceptionParamsWithStatus) {
    const { message, statusCode, url, cause } = params;
    if (cause) {
      super(message, { cause });
    } else {
      super(message);
    }
    this.url = url;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpException.prototype);
    this.name = 'HttpException';
  }
}
