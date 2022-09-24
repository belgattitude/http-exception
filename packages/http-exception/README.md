# @belgattitude/http-exception

Delightful http exceptions for typescript and js.

[![npm](https://img.shields.io/npm/v/@belgattitude/http-exception?style=for-the-badge&labelColor=222)](https://www.npmjs.com/package/@belgattitude/http-exception)
[![size](https://img.shields.io/bundlephobia/minzip/@belgattitude/http-exception@latest?label=MinGZIP&style=for-the-badge&labelColor=333&color=informational)](https://bundlephobia.com/package/@belgattitude/http-exception@latest)
[![browserslist](https://img.shields.io/static/v1?label=Browser&message=>0.25%&logo=googlechrome&style=for-the-badge&labelColor=444&color=informational)](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D)
[![dist](https://img.shields.io/static/v1?label=&message=cjs|esm|treeshake&logo=webpack&style=for-the-badge&labelColor=444&color=informational)](https://github.com/belgattitude/http-exception/blob/main/packages/http-exception/.size-limit.cjs)
[![ci](https://img.shields.io/github/checks-status/belgattitude/http-exception/main?label=CI&logo=github&style=for-the-badge&labelColor=444)](https://github.com/belgattitude/http-exception/actions?query=branch%3Amain)
[![codecov](https://img.shields.io/codecov/c/github/belgattitude/http-exception?logo=codecov&style=for-the-badge&labelColor=444)](https://codecov.io/gh/belgattitude/http-exception)
[![techdebt](https://img.shields.io/codeclimate/tech-debt/belgattitude/http-exception?label=TechDebt&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/http-exception)
[![maintainability](https://img.shields.io/codeclimate/maintainability/belgattitude/http-exception?label=Maintainability&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/http-exception)
[![ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/belgattitude)

## Features

- [x] Http exceptions as individual named export.
- [x] Support contextual information such as url.
- [x] Default message extracted from exception name.
- [x] Json serializer to allow sharing in ssr frameworks.
- [x] Supports recent Error.cause for nested.
- [x] Typescript with typedoc and links to mdn straight from the ide.
- [x] Works with node 14+ and browsers (with a conservative policy).

## Table of content

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Reasoning](#reasoning)
- [Usage](#usage)
  - [Assigned exceptions](#assigned-exceptions)
    - [Properties](#properties)
    - [Parameters](#parameters)
  - [Non-official status codes](#non-official-status-codes)
  - [Factory](#factory)
  - [Typeguards](#typeguards)
  - [Instance checks](#instance-checks)
- [Serializer](#serializer)
- [List](#list)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Install

```bash
$ npm install @belgattitude/http-exception  # via npm
$ yarn add @belgattitude/http-exception     # via yarn
```

### Reasoning

### Usage

#### Assigned exceptions

IETF assigned http error status codes are available under individual named exports. They start by the
by `Http` prefix to ease ide experience (suggestions) and to avoid naming collisions
(ie: domain exceptions such as NotFound...). You'll find the current supported list in [this section](#list).

```typescript
import { HttpNotFound } from "@belgattitude/http-exception";
```

##### Properties

| HttpException | Type                    | Description                                                                                                                        |
| ------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| statusCode    | `number`                | Http error status code (400-599).                                                                                                  |
| message       | `string`                | Default or provided message.                                                                                                       |
| url           | `string&#124;undefined` | @see [About exception context](#about-context).                                                                                    |
| stack         | `string&#124;undefined` | @see [Error.prototype.stack](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack) on MDN. |
| cause         | `Error&#124;undefined`  | @see [Error.prototype.stack](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)         |

##### Parameters

Exceptions optionally accepts a parameter of type `string | HttpExceptionParams`. When no
params are provided, message will default to the english description
(ie: `new HttpNotFound()` -> `Ǹot found`). When a `string` is provided it will be used as the
error message, otherwise you can use the following params:

| HttpExceptionParams | Type     | Description                                                                                                                                            |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| message?            | `string` | [Error message](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message), defaults to english short description |
| url?                | `string` | @see: contextual                                                                                                                                       |
| cause?              | `Error`  | Error cause                                                                                                                                            |

Example:

```typescript
import {
  HttpBadRequest,
  HttpInternalServerError,
} from "@belgattitude/http-exception";

throw new HttpInternalServerError({
  message: 'Custom message rather than "Internal Server Error"',
  url: "https://microservice.example.org/microservice",
  cause: new HttpBadRequest("Missing parameter."), // or any Error...
});
```

#### Non-official status codes

While their usage is not recommended, some status codes might be found in the wild (generally server status codes).

```typescript
import {
  createHttpException,
  HttpServerException,
} from "@belgattitude/http-exception";

const nonOfficialStatusCodes = [
  [509, "Might refer to bandwidth limit"],
  [525, "Might refer to SSL Handshake Failed (ie: cloudflare)"],
  [526, "Might refer to Invalid SSL Certificate (ie: cloudflare)"],
  ["...", "..."],
];

const e = createHttpException(509, {
  // HttpExceptionParams
}); // `e2 instanceof HttpServerException

// alternatively
const alternate = new HttpServerException({
  statusCode: 509,
  // HttpExceptionParams
});
```

#### Factory

The `createHttpException` function allows to create an exception from any status code.

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
  HttpNotFound,
  HttpInternalServerError,
} from "@belgattitude/http-exception";

const true1 = isHttpException(new HttpNotFound());
const true2 = isHttpClientException(new HttpNotFound());
const true3 = isHttpServerException(new HttpInternalServerError());

const false1 = isHttpClientException(new HttpInternalServerError());
const false2 = isHttpServerException(new HttpNotFound());
const false3 = isHttpException(new Error());
```

#### Instance checks

```typescript
import {
  HttpException,
  HttpClientException,
  HttpServerException,
  HttpNotFound,
  HttpInternalServerError,
} from "@belgattitude/http-exception";

const true1 = new HttpNotFound() instanceof HttpNotFound;
const true2 = new HttpNotFound() instanceof HttpException;
const true3 = new HttpNotFound() instanceof HttpClientException;
const true4 = new HttpInternalServerError() instanceof HttpServerException;

const false1 = new HttpNotFoundError() instanceof HttpServerException;
const false2 = new HttpInternalServerError() instanceof HttpClientException;
const false3 = new Error() instanceof HttpException;
```

### Serializer

HttpException can be serialized to json and vice-versa. It can be useful in ssr frameworks such as
[nextjs](https://nextjs.org/) whenever a server error should be shared within the browser context (see also
the excellent [superjson](https://github.com/blitz-js/superjson#recipes)).

Serialization supports the [Error.cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
but totally ignores it the runtime (node or browser) does not support it (or without polyfills).

Additionally, you can pass any native errors (`Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`)
as well as a custom one (the later will be transformed to the base type Error). That was necessary to support the cause param.

| Method                                                              |
| ------------------------------------------------------------------- |
| **toJson**(HttpException &#124; NativeError &#124; Error): string   |
| **fromJson**(string): HttpException &#124; NativeError &#124; Error |

```typescript
import {
  HttpForbidden,
  HttpUnavailableForLegalReasons,
} from "@belgattitude/http-exception";
import { fromJson, toJson } from "@belgattitude/http-exception/serializer";

const e = new HttpForbidden({
  url: "https://www.cool.me",
  /*
    cause: new HttpUnavailableForLegalReasons({
        cause: new Error('example with cause')
    }),   
     */
});

const json = toJson(e);
const exception = fromJson(json); // e === exception
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
| 421         | **↳↳ HttpMisdirectedRequest**            |                              |                                                                                        |
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
| 506         | **↳↳ HttpVariantAlsoNegotiates**         |                              |                                                                                        |
| 507         | **↳↳ HttpInsufficientStorage**           |                              |                                                                                        |
| 508         | **↳↳ HttpLoopDetected**                  |                              |                                                                                        |
| 510         | **↳↳ HttpNotExtended**                   |                              |                                                                                        |
| 511         | **↳↳ HttpNetwordAuthenticationRequired** |                              |                                                                                        |
