[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [server](../modules/server.md) / HttpBadGateway

# Class: HttpBadGateway

[server](../modules/server.md).HttpBadGateway

Server status 502

**`See`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpBadGateway`**

## Table of contents

### Constructors

- [constructor](server.HttpBadGateway.md#constructor)

### Properties

- [statusCode](server.HttpBadGateway.md#statuscode)
- [url](server.HttpBadGateway.md#url)
- [STATUS](server.HttpBadGateway.md#status)

## Constructors

### constructor

• **new HttpBadGateway**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `502`
