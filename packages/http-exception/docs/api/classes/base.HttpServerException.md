[@belgattitude/http-exception](../README.md) / [base](../modules/base.md) / HttpServerException

# Class: HttpServerException

[base](../modules/base.md).HttpServerException

Construct a new HttpServerException class

**`Param`**

http status code between 500-599, no checks are done on the validity of the number.

**`Param`**

either a message or an object containing HttpExceptionParams

## Hierarchy

- [`HttpException`](base.HttpException.md)

  ↳ **`HttpServerException`**

  ↳↳ [`HttpBadGateway`](server.HttpBadGateway.md)

  ↳↳ [`HttpVersionNotSupported`](server.HttpVersionNotSupported.md)

  ↳↳ [`HttpGatewayTimeout`](server.HttpGatewayTimeout.md)

  ↳↳ [`HttpInternalServerError`](server.HttpInternalServerError.md)

  ↳↳ [`HttpNetworkAuthenticationRequired`](server.HttpNetworkAuthenticationRequired.md)

  ↳↳ [`HttpNotExtended`](server.HttpNotExtended.md)

  ↳↳ [`HttpNotImplemented`](server.HttpNotImplemented.md)

  ↳↳ [`HttpServiceUnavailable`](server.HttpServiceUnavailable.md)

  ↳↳ [`HttpInsufficientStorage`](server.HttpInsufficientStorage.md)

  ↳↳ [`HttpLoopDetected`](server.HttpLoopDetected.md)

  ↳↳ [`HttpVariantAlsoNegotiates`](server.HttpVariantAlsoNegotiates.md)

## Table of contents

### Constructors

- [constructor](base.HttpServerException.md#constructor)

### Properties

- [cause](base.HttpServerException.md#cause)
- [statusCode](base.HttpServerException.md#statuscode)
- [url](base.HttpServerException.md#url)

## Constructors

### constructor

• **new HttpServerException**(`statusCode`, `msgOrParams?`)

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
