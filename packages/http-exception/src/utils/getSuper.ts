import type {
  HttpExceptionParams,
  HttpExceptionParamsWithStatus,
} from '../types';
import { getMsgFromCls } from './getMsgFromCls';

/**
 * Return params applicable to parent HttpException class
 * when calling super();
 * @internal
 */
export const getSuper = (
  className: string,
  statusCode: number,
  msgOrParams?: HttpExceptionParams | string
): HttpExceptionParamsWithStatus => {
  const p =
    typeof msgOrParams === 'string' ? { message: msgOrParams } : msgOrParams;
  const { message = getMsgFromCls(className), url, cause } = p ?? {};
  return { statusCode, message, url, cause };
};
