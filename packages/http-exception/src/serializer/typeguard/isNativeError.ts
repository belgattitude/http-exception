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
