import type { HttpExceptionParamsWithStatus } from '../types';
import { HttpException } from './HttpException';

export class HttpClientException extends HttpException {
  constructor(params: HttpExceptionParamsWithStatus) {
    super(params);
    Object.setPrototypeOf(this, HttpClientException.prototype);
    this.name = 'HttpClientException';
  }
}
