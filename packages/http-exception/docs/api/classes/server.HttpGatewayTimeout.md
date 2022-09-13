[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpGatewayTimeout

# Class: HttpGatewayTimeout

[server](../modules/server.md).HttpGatewayTimeout

504 Gateway Timeout (server)

This error response is given when the server is acting as a gateway and cannot get a response in time.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
- https://httpstatus.in/504/

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpGatewayTimeout`**

## Table of contents

### Constructors

- [constructor](server.HttpGatewayTimeout.md#constructor)

### Properties

- [statusCode](server.HttpGatewayTimeout.md#statuscode)
- [url](server.HttpGatewayTimeout.md#url)
- [STATUS](server.HttpGatewayTimeout.md#status)

## Constructors

### constructor

• **new HttpGatewayTimeout**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `504`
