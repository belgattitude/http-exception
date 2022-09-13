/**
 * Named parameters for the `HttpXXX` constructor.
 */
export type HttpExceptionParams = {
  message?: string;
  url?: string;
  cause?: Error;
};
