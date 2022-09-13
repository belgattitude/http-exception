import { HttpException } from '../base';
import type {
  SerializedHttpException} from './serializeHttpException';
import {
  serializeHttpException,
} from './serializeHttpException';

export type SerializedError = {
  __type: string;
  __version: number;
  message: string | null;
  stack: string | null;
  cause: SerializedError | null;
};

/**
 * Native ecmascript errors
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types
 * @see https://262.ecma-international.org/12.0/#sec-well-known-intrinsic-objects
 */
const nativeErrors = [
  Error,
  AggregateError,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
];

export type NativeError =
  | Error
  | AggregateError
  | EvalError
  | RangeError
  | ReferenceError
  | SyntaxError
  | TypeError
  | URIError;

export const isNativeError = (error: unknown): error is NativeError => {
  return (
    nativeErrors.filter((nativeError) => error instanceof nativeError).length >
    0
  );
};

export const serializeNativeError = (
  nativeError: NativeError
): SerializedError => {
  const { name, message = null, stack = null, cause = null } = nativeError;
  let c: SerializedError | SerializedHttpException | null = null;
  if (cause instanceof HttpException) {
    c = serializeHttpException(cause);
  } else if (isNativeError(cause)) {
    c = serializeNativeError(cause);
  }
  return {
    __type: name,
    __version: 1,
    message,
    stack,
    cause: c,
  };
};
