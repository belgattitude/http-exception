[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [server](../modules/server.md) / HttpVariantAlsoNegociates

# Class: HttpVariantAlsoNegociates

[server](../modules/server.md).HttpVariantAlsoNegociates

Server status 506

**`See`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpVariantAlsoNegociates`**

## Table of contents

### Constructors

- [constructor](server.HttpVariantAlsoNegociates.md#constructor)

### Properties

- [statusCode](server.HttpVariantAlsoNegociates.md#statuscode)
- [url](server.HttpVariantAlsoNegociates.md#url)
- [STATUS](server.HttpVariantAlsoNegociates.md#status)

## Constructors

### constructor

• **new HttpVariantAlsoNegociates**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpServerException](base.HttpServerException.md).[constructor](base.HttpServerException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

#### Inherited from

[HttpServerException](base.HttpServerException.md).[statusCode](base.HttpServerException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error

#### Inherited from

[HttpServerException](base.HttpServerException.md).[url](base.HttpServerException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `506`
