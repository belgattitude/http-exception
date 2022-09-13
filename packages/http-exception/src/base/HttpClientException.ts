import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';
import { HttpException } from './HttpException';

export class HttpClientException extends HttpException {
  constructor(statusCode: number, msgOrParams?: HttpExceptionParams | string) {
    const name = 'HttpClientException';
    super(statusCode, getSuper(name, msgOrParams));
    Object.setPrototypeOf(this, HttpClientException.prototype);
    this.name = name;
  }
}
