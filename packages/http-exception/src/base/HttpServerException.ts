import type { HttpExceptionParamsWithStatus } from '../types';
import { HttpException } from './HttpException';

export class HttpServerException extends HttpException {
  constructor(params: HttpExceptionParamsWithStatus) {
    super(params);
    Object.setPrototypeOf(this, HttpServerException.prototype);
    this.name = 'HttpServerException';
  }
}
