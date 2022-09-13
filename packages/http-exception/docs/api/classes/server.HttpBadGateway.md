[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpBadGateway

# Class: HttpBadGateway

[server](../modules/server.md).HttpBadGateway

502 Bad Gateway (server)

This error response means that the server, while working as a gateway to get a response needed to
handle the request, got an invalid response.

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

Http error status code (400-599)

#### Inherited from

[HttpServerException](base.HttpServerException.md).[statusCode](base.HttpServerException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Indicates the original url that caused the error.

#### Inherited from

[HttpServerException](base.HttpServerException.md).[url](base.HttpServerException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `502`