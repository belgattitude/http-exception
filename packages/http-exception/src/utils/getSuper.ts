import type {
  HttpExceptionParams,
  HttpExceptionParamsWithStatus,
} from '../types';
import { getMsgFromCls } from './getMsgFromCls';

/**
 * Return params applicable to parent HttpException class when calling super();
 *
 * @param {string} name - class name without Http prefix
 * @param {number} statusCode - http error status code
 * @param {string | HttpExceptionParams} msgOrParams - message or params
 *
 * @internal
 */
export const getSuper = (
  name: string,
  statusCode: number,
  msgOrParams?: HttpExceptionParams | string
): HttpExceptionParamsWithStatus => {
  const p =
    typeof msgOrParams === 'string' ? { message: msgOrParams } : msgOrParams;
  const { message = getMsgFromCls(name), url, cause } = p ?? {};
  return { statusCode, message, url, cause };
};
