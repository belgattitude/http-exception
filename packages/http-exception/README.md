# @belgattitude/http-exception

Delightful http exceptions. Crafted with node, browsers, ssr frameworks, error logging / reporting in mind.
No deps.

[![npm](https://img.shields.io/npm/v/@belgattitude/http-exception?style=for-the-badge&labelColor=222)](https://www.npmjs.com/package/@belgattitude/http-exception)
[![size](https://img.shields.io/bundlephobia/minzip/@belgattitude/http-exception@latest?label=MinGZIP&style=for-the-badge&labelColor=333&color=informational)](https://bundlephobia.com/package/@belgattitude/http-exception@latest)
[![browserslist](https://img.shields.io/static/v1?label=Browser&message=>0.25%&logo=googlechrome&style=for-the-badge&labelColor=444&color=informational)](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D)
[![dist](https://img.shields.io/static/v1?label=&message=cjs|esm|treeshake&logo=webpack&style=for-the-badge&labelColor=444&color=informational)](https://github.com/belgattitude/http-exception/blob/main/packages/http-exception/.size-limit.cjs)
[![ci](https://img.shields.io/github/checks-status/belgattitude/http-exception/main?label=CI&logo=github&style=for-the-badge&labelColor=444)](https://github.com/belgattitude/http-exception/actions?query=branch%3Amain)
[![codecov](https://img.shields.io/codecov/c/github/belgattitude/http-exception?logo=codecov&style=for-the-badge&labelColor=444)](https://codecov.io/gh/belgattitude/http-exception)
[![techdebt](https://img.shields.io/codeclimate/tech-debt/belgattitude/http-exception?label=TechDebt&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/http-exception)
[![maintainability](https://img.shields.io/codeclimate/maintainability/belgattitude/http-exception?label=Maintainability&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/http-exception)
[![ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/belgattitude)

## Install

```bash
$ npm install @belgattitude/http-exception  # via npm
$ yarn add @belgattitude/http-exception     # via yarn
```

## Features

- [x] Http exceptions as [named export](#named-exceptions) or via [factory](#factory).
- [x] Allow additional [contextual]() information (i.e: 'url'...)
- [x] [Json serialization](#serializer) for ssr frameworks, loggers... (i.e. nextjs, superjson, pino, etc)
- [x] [Extends](#uml-class-diagram) native [Error]() object with [stacktrace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) and [Error.cause](#about-cause) support.
- [x] Bundled for wide browser support ([0.25%, not dead](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D)) with minimal [size](https://github.com/belgattitude/http-exception/blob/main/packages/http-exception/.size-limit.cjs) impact.
- [x] Automatic error message inferred from http exception name.
- [x] Typescript & typedoc with descriptions and links to mdn straight from the ide.

## Reasoning

## Documentation

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
  - [Named exceptions](#named-exceptions)
    - [HttpException parameters](#httpexception-parameters)
    - [HttpException properties](#httpexception-properties)
  - [Factory](#factory)
    - [createHttpException](#createhttpexception)
  - [Types and validation](#types-and-validation)
    - [Typeguards](#typeguards)
    - [Instance checks](#instance-checks)
- [Serializer](#serializer)
  - [JSON](#json)
- [Advanced](#advanced)
  - [Non-official status codes](#non-official-status-codes)
- [Notes](#notes)
  - [About Error.cause](#about-errorcause)
  - [UML class diagram](#uml-class-diagram)
  - [List of named exceptions](#list-of-named-exceptions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Usage

#### Named exceptions

IETF assigned http error status codes are available under individual named exports. They start by the
by `Http` prefix to ease ide experience (suggestions) and to avoid naming collisions
(ie: domain exceptions such as NotFound...). You'll find the current supported list in [this section](#list).

```typescript
import {
  HttpNotFound,
  HttpServiceUnavailable,
} from "@belgattitude/http-exception";
```

##### HttpException parameters

Http exception optionally accepts a parameter of type `string | HttpExceptionParams`. When no
params are provided, message will default to the english description
(ie: `new HttpNotFound()` -> `Ǹot found`). When a `string` is provided it will be used as the
error message, otherwise you can use the following params:

| HttpExceptionParams | Type     | Description                                                                                                                                            |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| message?            | `string` | [Error message](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message), defaults to english short description |
| url?                | `string` | @see [about exception context](#about-context).                                                                                                        |
| cause?              | `Error`  | @see [about nested error cause](#about-cause).                                                                                                         |

Example:

```typescript
import {
  HttpInternalServerError,
  HttpNotImplemented,
} from "@belgattitude/http-exception";

throw new HttpInternalServerError({
  message: "Something really wrong happened.",
  url: "https://microservice.example.org/microservice",
  cause: new HttpNotImplemented(), // or any Error...
});
```

##### HttpException properties

| HttpException | Type                    | Description                                                                                                                        |
| ------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| statusCode    | `number`                | Http error status code (400-599).                                                                                                  |
| message       | `string`                | Default or provided message.                                                                                                       |
| url           | `string&#124;undefined` | @see [about exception context](#about-context).                                                                                    |
| stack         | `string&#124;undefined` | @see [Error.prototype.stack](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack) on MDN. |
| cause         | `Error&#124;undefined`  | @see [about nested error cause](#about-cause)                                                                                      |

#### Factory

##### createHttpException

The `createHttpException` function allows to create an exception from an
arbitrary status code.

```typescript
import { createHttpException } from "@belgattitude/http-exception";

const e404 = createHttpException(404); // e404 instanceof HttpClientException
const e500 = createHttpException(500); // e500 instanceof HttpServerException
```

Additional [parameters](#parameters) can be provided as a second argument.

```typescript
const e404 = createHttpException(404, "The graal is yet to find !");
const e500 = createHttpException(500, {
  message: "Something really wrong happened.",
  url: "https://microservice.example.org/microservice",
  cause: new HttpNotImplemented(), // or any Error...
});
```

> **warning** No checks are done about the validity of the provided status code. See also
> [about non-official status codes](#non-official-status-codes)

#### Types and validation

##### Typeguards

```typescript
import {
  isHttpException,
  isHttpClientException,
  isHttpServerException,
  isHttpErrorStatusCode,
} from "@belgattitude/http-exception";

// True
isHttpErrorStatusCode(404);
isHttpException(new HttpNotFound());
isHttpClientException(new HttpNotFound());
isHttpServerException(new HttpInternalServerError());

// False
isHttpErrorStatusCode(200);
isHttpClientException(new HttpInternalServerError());
isHttpServerException(new HttpNotFound());
isHttpException(new Error());
```

##### Instance checks

> **info**, take a look at the uml class diagram

```typescript
// True
new HttpNotFound() instanceof HttpNotFound;
new HttpNotFound() instanceof HttpException;
new HttpNotFound() instanceof HttpClientException;
new HttpInternalServerError() instanceof HttpServerException;

// False
new HttpNotFoundError() instanceof HttpServerException;
new HttpInternalServerError() instanceof HttpClientException;
new Error() instanceof HttpException;
```

### Serializer

HttpException can be serialized to json and vice-versa. It can be useful in ssr frameworks such as
[nextjs](https://nextjs.org/) whenever a server error should be shared within the browser context (see also
[superjson](https://github.com/blitz-js/superjson#recipes)).

Serialization supports the [Error.cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
but totally ignores it the runtime (node or browser) does not support it (or without polyfills).

Additionally, you can pass any native errors (`Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`)
as well as a custom one (the later will be transformed to the base type Error). That was necessary to support the cause param.

#### JSON

```typescript
import { HttpForbidden } from "@belgattitude/http-exception";
import { fromJson, toJson } from "@belgattitude/http-exception/serializer";

const err = new HttpForbidden({
  url: "https://www.origin.url",
});

const json = toJson(err);
const exception = fromJson(json); // err === exception
```

### Advanced

##### Non-official status codes

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
  // optional HttpExceptionParams
}); // `e2 instanceof HttpServerException

// alternatively
const alternate = new HttpServerException({
  statusCode: 509,
  // ...(optional HttpExceptionParams)
});
```

### Notes

#### About Error.cause

#### UML class diagram

```mermaid
classDiagram
    Error <|-- HttpException
    Error: +string message
    Error: +string? stack
    Error: +unknown cause
    HttpException : +int statusCode
    HttpException : +String url
    HttpException : +Error? cause
    HttpException <|-- HttpClientException
    HttpException <|-- HttpServerException
    HttpClientException <|-- HttpBadRequest
    HttpClientException <|-- HttpNotFound
    HttpServerException <|-- HttpInternalServerError
    HttpServerException <|-- HttpServiceUnavailable
    HttpNotFound : 404 statusCode
    HttpBadRequest : 400 statusCode
```

#### List of named exceptions

Client http status error codes (400...499). Link to

| Status | Class                           |
| ------ | ------------------------------- |
| 400    | HttpBadRequest                  |
| 401    | HttpUnauthorized                |
| 402    | HttpPaymentRequired             |
| 403    | HttpForbidden                   |
| 404    | HttpNotFound                    |
| 405    | HttpMethodNotAllowed            |
| 406    | HttpNotAcceptable               |
| 407    | HttpProxyAuthenticationRequired |
| 408    | HttpRequestTimeout              |
| 409    | HttpConflict                    |
| 410    | HttpGone                        |
| 411    | HttpLengthRequired              |
| 412    | HttpPreConditionFailed          |
| 413    | HttpPayloadTooLarge             |
| 414    | HttpUriTooLong                  |
| 415    | HttpUnsupportedMediaType        |
| 416    | HttpRangeNotSatisfiable         |
| 417    | HttpExpectationFailed           |
| 418    | HttpImATeapot                   |
| 421    | HttpMisdirectedRequest          |
| 422    | HttpUnprocessableEntity         |
| 423    | HttpLocked                      |
| 424    | HttpFailedDependency            |
| 425    | HttpTooEarly                    |
| 426    | HttpUpgradeRequired             |
| 428    | HttpPreconditionFailed          |
| 429    | HttpTooManyRequests             |
| 431    | HttpRequestHeaderFieldsTooLarge |
| 451    | HttpUnavailableForLegalReasons  |

Server http status error code

| Status | Class                             |
| ------ | --------------------------------- |
| 500    | HttpInternalServerError           |
| 501    | HttpNotImplemented                |
| 502    | HttpBadGateway                    |
| 503    | HttpServiceUnavailable            |
| 504    | HttpGatewayTimeout                |
| 505    | HttpVersionNotSupported           |
| 506    | HttpVariantAlsoNegotiates         |
| 507    | HttpInsufficientStorage           |
| 508    | HttpLoopDetected                  |
| 510    | HttpNotExtended                   |
| 511    | HttpNetwordAuthenticationRequired |
