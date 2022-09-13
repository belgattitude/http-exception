import type { HttpExceptionParams } from '../types';
import { getMsgFromCls } from './getMsgFromCls';

/**
 * Return params applicable to parent HttpException class when calling super();
 *
 * @param {string} name - class name without Http prefix
 * @param {string | HttpExceptionParams} msgOrParams - message or params
 *
 * @internal
 */
export const getSuper = (
  name: string,
  msgOrParams?: HttpExceptionParams | string
): HttpExceptionParams => {
  const p =
    typeof msgOrParams === 'string' ? { message: msgOrParams } : msgOrParams;
  const { message = getMsgFromCls(name), url, cause } = p ?? {};
  return { message, url, cause };
};
