import type { HttpExceptionParamsWithStatus } from '../types';
import { HttpException } from './HttpException';

export class HttpClientException extends HttpException {
  constructor(params: HttpExceptionParamsWithStatus) {
    super(params);
    this.name = 'HttpClientException';
    Object.setPrototypeOf(this, HttpClientException.prototype);
  }
}
