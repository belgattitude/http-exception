[@belgattitude/http-exception](../README.md) / [base](../modules/base.md) / HttpException

# Class: HttpException

[base](../modules/base.md).HttpException

## Hierarchy

- `Error`

  ↳ **`HttpException`**

  ↳↳ [`HttpServerException`](base.HttpServerException.md)

  ↳↳ [`HttpClientException`](base.HttpClientException.md)

## Table of contents

### Constructors

- [constructor](base.HttpException.md#constructor)

### Properties

- [cause](base.HttpException.md#cause)
- [statusCode](base.HttpException.md#statuscode)
- [url](base.HttpException.md#url)

## Constructors

### constructor

• **new HttpException**(`statusCode`, `msgOrParams?`)

Construct a new HttpException class

#### Parameters

| Name           | Type                                                                         | Description                                                                         |
| :------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `statusCode`   | `number`                                                                     | http status code between 400-599, no checks are done on the validity of the number. |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) | either a message or an object containing HttpExceptionParams                        |

#### Overrides

Error.constructor

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

If set and the runtime (browser or node) supports it
you can get back the error cause

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause

#### Overrides

Error.cause

---

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code (400-599)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Indicates the original url that caused the error.
