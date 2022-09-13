export type HttpExceptionParams = {
  /**
   * Exception message, if not provided the default is the exception
   * name in natural language (ie: "HttpNotFound" -> "Not found")
   */
  message?: string;
  /**
   * Indicates the original url that caused the error.
   */
  url?: string;
  /**
   * Indicates the original cause of the HttpException
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause
   */
  cause?: Error;
};