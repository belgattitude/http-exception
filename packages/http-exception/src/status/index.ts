/* eslint-disable @typescript-eslint/naming-convention */
import * as Client from '../client';
import * as Server from '../server';
export const statusMap = {
  400: Client.HttpBadRequest,
  401: Client.HttpUnauthorized,
  402: Client.HttpPaymentRequired,
  403: Client.HttpForbidden,
  404: Client.HttpNotFound,
  405: Client.HttpMethodNotAllowed,
  406: Client.HttpNotAcceptable,
  407: Client.HttpProxyAuthenticationRequired,
  408: Client.HttpRequestTimeout,
  409: Client.HttpConflict,
  410: Client.HttpGone,
  411: Client.HttpLengthRequired,
  412: Client.HttpPreconditionFailed,
  413: Client.HttpPayloadTooLarge,
  414: Client.HttpUriTooLong,
  415: Client.HttpUnsupportedMediaType,
  416: Client.HttpRangeNotSatisfiable,
  417: Client.HttpExpectationFailed,
  418: Client.HttpImATeapot,
  421: Client.HttpMisredirectedRequest,
  422: Client.HttpUnprocessableEntity,
  423: Client.HttpLocked,
  424: Client.HttpFailedDependency,
  425: Client.HttpTooEarly,
  426: Client.HttpUpgradeRequired,
  428: Client.HttpPreconditionRequired,
  429: Client.HttpTooManyRequests,
  431: Client.HttpRequestHeaderFieldsTooLarge,
  451: Client.HttpUnavailableForLegalReasons,
  500: Server.HttpInternalServerError,
  501: Server.HttpNotImplemented,
  502: Server.HttpBadGateway,
  503: Server.HttpServiceUnavailable,
  504: Server.HttpGatewayTimeout,
  505: Server.HttpVersionNotSupported,
  506: Server.HttpVariantAlsoNegociates,
  507: Server.HttpInsufficientStorage, // webdav
  508: Server.HttpLoopDetected, // webdav
  // Well-known (unassigned by ietf https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
  // 509: 'BandwidthLimitExceeded',
  510: Server.HttpNotExtended,
  511: Server.HttpNetworkAuthenticationRequired,
  // Well-known Cloudflare (unassigned by ietf https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
  /*
  520: 'Unknown Error',
  521: 'Web Server Is Down',
  522: 'Connection Timed Out',
  523: 'Origin Is Unreachable',
  524: 'A Timeout Occurred',
  525: 'SSL Handshake Failed',
  526: 'Invalid SSL Certificate',
   */
} as const;
