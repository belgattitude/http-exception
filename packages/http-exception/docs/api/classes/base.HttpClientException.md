[@belgattitude/http-exception](../README.md) / [base](../modules/base.md) / HttpClientException

# Class: HttpClientException

[base](../modules/base.md).HttpClientException

Construct a new HttpClientException class

**`Param`**

http status code between 400-499, no checks are done on the validity of the number.

**`Param`**

either a message or an object containing HttpExceptionParams

## Hierarchy

- [`HttpException`](base.HttpException.md)

  ↳ **`HttpClientException`**

  ↳↳ [`HttpBadRequest`](client.HttpBadRequest.md)

  ↳↳ [`HttpConflict`](client.HttpConflict.md)

  ↳↳ [`HttpExpectationFailed`](client.HttpExpectationFailed.md)

  ↳↳ [`HttpFailedDependency`](client.HttpFailedDependency.md)

  ↳↳ [`HttpForbidden`](client.HttpForbidden.md)

  ↳↳ [`HttpGone`](client.HttpGone.md)

  ↳↳ [`HttpImATeapot`](client.HttpImATeapot.md)

  ↳↳ [`HttpLengthRequired`](client.HttpLengthRequired.md)

  ↳↳ [`HttpLocked`](client.HttpLocked.md)

  ↳↳ [`HttpMisdirectedRequest`](client.HttpMisdirectedRequest.md)

  ↳↳ [`HttpMethodNotAllowed`](client.HttpMethodNotAllowed.md)

  ↳↳ [`HttpNotAcceptable`](client.HttpNotAcceptable.md)

  ↳↳ [`HttpNotFound`](client.HttpNotFound.md)

  ↳↳ [`HttpPayloadTooLarge`](client.HttpPayloadTooLarge.md)

  ↳↳ [`HttpPaymentRequired`](client.HttpPaymentRequired.md)

  ↳↳ [`HttpPreconditionFailed`](client.HttpPreconditionFailed.md)

  ↳↳ [`HttpPreconditionRequired`](client.HttpPreconditionRequired.md)

  ↳↳ [`HttpProxyAuthenticationRequired`](client.HttpProxyAuthenticationRequired.md)

  ↳↳ [`HttpRangeNotSatisfiable`](client.HttpRangeNotSatisfiable.md)

  ↳↳ [`HttpRequestHeaderFieldsTooLarge`](client.HttpRequestHeaderFieldsTooLarge.md)

  ↳↳ [`HttpRequestTimeout`](client.HttpRequestTimeout.md)

  ↳↳ [`HttpTooEarly`](client.HttpTooEarly.md)

  ↳↳ [`HttpTooManyRequests`](client.HttpTooManyRequests.md)

  ↳↳ [`HttpUnauthorized`](client.HttpUnauthorized.md)

  ↳↳ [`HttpUnavailableForLegalReasons`](client.HttpUnavailableForLegalReasons.md)

  ↳↳ [`HttpUnprocessableEntity`](client.HttpUnprocessableEntity.md)

  ↳↳ [`HttpUnsupportedMediaType`](client.HttpUnsupportedMediaType.md)

  ↳↳ [`HttpUpgradeRequired`](client.HttpUpgradeRequired.md)

  ↳↳ [`HttpUriTooLong`](client.HttpUriTooLong.md)

## Table of contents

### Constructors

- [constructor](base.HttpClientException.md#constructor)

### Properties

- [cause](base.HttpClientException.md#cause)
- [statusCode](base.HttpClientException.md#statuscode)
- [url](base.HttpClientException.md#url)

## Constructors

### constructor

• **new HttpClientException**(`statusCode`, `msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `statusCode`   | `number`                                                                     |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpException](base.HttpException.md).[constructor](base.HttpException.md#constructor)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

If set and the runtime (browser or node) supports it
you can get back the error cause

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause

#### Inherited from

[HttpException](base.HttpException.md).[cause](base.HttpException.md#cause)

---

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code (400-599)

#### Inherited from

[HttpException](base.HttpException.md).[statusCode](base.HttpException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Indicates the original url that caused the error.

#### Inherited from

[HttpException](base.HttpException.md).[url](base.HttpException.md#url)
