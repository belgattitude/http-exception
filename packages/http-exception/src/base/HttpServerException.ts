import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';
import { HttpException } from './HttpException';

export class HttpServerException extends HttpException {
  constructor(statusCode: number, msgOrParams?: HttpExceptionParams | string) {
    super(statusCode, getSuper('HttpServerException', msgOrParams));
    Object.setPrototypeOf(this, HttpServerException.prototype);
    this.name = 'HttpServerException';
  }
}
