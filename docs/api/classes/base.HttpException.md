[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [base](../modules/base.md) / HttpException

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

- [statusCode](base.HttpException.md#statuscode)
- [url](base.HttpException.md#url)

## Constructors

### constructor

• **new HttpException**(`params`)

#### Parameters

| Name     | Type                                                                                 |
| :------- | :----------------------------------------------------------------------------------- |
| `params` | [`HttpExceptionParamsWithStatus`](../modules/types.md#httpexceptionparamswithstatus) |

#### Overrides

Error.constructor

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error
