# @belgattitude/http-exception

Delightful http exceptions for typescript and js.

[![npm](https://img.shields.io/npm/v/@belgattitude/http-exception?style=for-the-badge)](https://www.npmjs.com/package/@belgattitude/http-exception)
[![size](https://img.shields.io/bundlephobia/minzip/@belgattitude/http-exception@latest?label=MinGZIP&style=for-the-badge&labelColor=000000)](https://bundlephobia.com/package/@belgattitude/http-exception)
[![techdebt](https://img.shields.io/codeclimate/tech-debt/belgattitude/http-exception?label=TechDebt&logo=code-climate&style=for-the-badge&labelColor=000000)](https://codeclimate.com/github/belgattitude/http-exception)
[![maintainability](https://img.shields.io/codeclimate/maintainability/belgattitude/http-exception?label=Maintainability&logo=code-climate&style=for-the-badge&labelColor=000000)](https://codeclimate.com/github/belgattitude/http-exception)
![typings](https://img.shields.io/static/v1?label=typings&message=4.0%2B&logo=typescript&style=for-the-badge&labelColor=000000&color=9cf)
[![license](https://img.shields.io/npm/l/@belgattitude/http-exception?style=for-the-badge&labelColor=000000")](https://github.com/belgattitude/http-exception/blob/main/LICENSE)

## Install

```bash
$ npm install @belgattitude/http-exception  # via npm
$ yarn add @belgattitude/http-exception     # via yarn
```

## Docs

### Usage

#### Creation

```typescript
import {
  HttpNotFound,
  HttpForbidden,
  HttpInternalServerError,
} from "@belgattitude/http-exception";

// Basic with default message "Http not found"
const err1 = new HttpNotFound();

// With custom message
const err2 = new HttpNotFound("Custom message");

// With original url context
const err3 = new HttpForbidden({
  url: "https://moma.org/forbidden-art",
});

// With context and custom message
const err4 = HttpInternalServerError({
  message: 'Custom message rather than "Internal Server Error"',
  url: "https://github.org/microservice",
});

// With cause
try {
  throw new Error("Original error");
} catch (e) {
  throw new HttpNotFound({ cause: e });
}
```

#### Factories

```typescript
import { createHttpException } from "@belgattitude/http-exception";

const err1 = createHttpException(404);
const err2 = createHttpException(404, "the Graal");
const err3 = createHttpException(404, {
  url: "https://moma.org/forbidden-art",
});
const err4 = createHttpException(500, {
  message: 'Custom message rather than "Internal Server Error"',
  url: "https://github.org/microservice",
});
```

#### Typeguards

```typescript
import {
  isHttpException,
  isHttpClientException,
  isHttpServerException,
  createHttpException,
  HttpClientException,
  HttpNotFound,
  HttpInternalServerError,
} from "@belgattitude/http-exception";

const true1 = isHttpException(new HttpNotFound());
const true2 = isHttpClientException(new HttpNotFound());
const true3 = isHttpServerException(new HttpInternalServerError());

const false1 = isHttpClientException(new HttpInternalServerError());
const false2 = isHttpClientException(new HttpNotFound());
const false3 = isHttpException(new Error());
```

### List

| Status      | Class                                    | Typeguard                    | Docs                                                                                   |
| ----------- | :--------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| _400...599_ | _HttpException_                          |                              |                                                                                        |
| _400...499_ | _↳ HttpClientException_                  | [isHttpClientException(e)]() | [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses) |
| 400         | **↳↳ HttpBadRequest**                    |                              |                                                                                        |
| 401         | **↳↳ HttpUnauthorized**                  |                              |                                                                                        |
| 402         | **↳↳ HttpPaymentRequired**               |                              |                                                                                        |
| 403         | **↳↳ HttpForbidden**                     |                              |                                                                                        |
| 404         | **↳↳ HttpNotFound**                      |                              |                                                                                        |
| 405         | **↳↳ HttpMethodNotAllowed**              |                              |                                                                                        |
| 406         | **↳↳ HttpNotAcceptable**                 |                              |                                                                                        |
| 407         | **↳↳ HttpProxyAuthenticationRequired**   |                              |                                                                                        |
| 408         | **↳↳ HttpRequestTimeout**                |                              |                                                                                        |
| 409         | **↳↳ HttpConflict**                      |                              |                                                                                        |
| 410         | **↳↳ HttpGone**                          |                              |                                                                                        |
| 411         | **↳↳ HttpLengthRequired**                |                              |                                                                                        |
| 412         | **↳↳ HttpPreConditionFailed**            |                              |                                                                                        |
| 413         | **↳↳ HttpPayloadTooLarge**               |                              |                                                                                        |
| 414         | **↳↳ HttpUriTooLong**                    |                              |                                                                                        |
| 415         | **↳↳ HttpUnsupportedMediaType**          |                              |                                                                                        |
| 416         | **↳↳ HttpRangeNotSatisfiable**           |                              |                                                                                        |
| 417         | **↳↳ HttpExpectationFailed**             |                              |                                                                                        |
| 418         | **↳↳ HttpImATeapot**                     |                              |                                                                                        |
| 421         | **↳↳ HttpMisredirectedRequest**          |                              |                                                                                        |
| 422         | **↳↳ HttpUnprocessableEntity**           |                              |                                                                                        |
| 423         | **↳↳ HttpLocked**                        |                              |                                                                                        |
| 424         | **↳↳ HttpFailedDependency**              |                              |                                                                                        |
| 425         | **↳↳ HttpTooEarly**                      |                              |                                                                                        |
| 426         | **↳↳ HttpUpgradeRequired**               |                              |                                                                                        |
| 428         | **↳↳ HttpPreconditionFailed**            |                              |                                                                                        |
| 429         | **↳↳ HttpTooManyRequests**               |                              |                                                                                        |
| 431         | **↳↳ HttpRequestHeaderFieldsTooLarge**   |                              |                                                                                        |
| 451         | **↳↳ HttpUnavailableForLegalReasons**    |                              |                                                                                        |
| _500...599_ | _↳ HttpServerException_                  | [isHttpServerException(e)]() | [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) |
| 500         | **↳↳ HttpInternalServerError**           |                              |                                                                                        |
| 501         | **↳↳ HttpNotImplemented**                |                              |                                                                                        |
| 502         | **↳↳ HttpBadGateway**                    |                              |                                                                                        |
| 503         | **↳↳ HttpServiceUnavailable**            |                              |                                                                                        |
| 504         | **↳↳ HttpGatewayTimeout**                |                              |                                                                                        |
| 505         | **↳↳ HttpVersionNotSupported**           |                              |                                                                                        |
| 506         | **↳↳ HttpVariantAlsoNegociates**         |                              |                                                                                        |
| 507         | **↳↳ HttpInsufficientStorage**           |                              |                                                                                        |
| 508         | **↳↳ HttpLoopDetected**                  |                              |                                                                                        |
| 509         | **↳↳ HttpBandwidthLimitExceeded**        |                              |                                                                                        |
| 510         | **↳↳ HttpNotExtended**                   |                              |                                                                                        |
| 511         | **↳↳ HttpNetwordAuthenticationRequired** |                              |                                                                                        |
