[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpNetworkAuthenticationRequired

# Class: HttpNetworkAuthenticationRequired

[server](../modules/server.md).HttpNetworkAuthenticationRequired

511 Network Authentication Required (server)

Indicates that the client needs to authenticate to gain network access.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
- https://httpstatus.in/511/

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpNetworkAuthenticationRequired`**

## Table of contents

### Constructors

- [constructor](server.HttpNetworkAuthenticationRequired.md#constructor)

### Properties

- [statusCode](server.HttpNetworkAuthenticationRequired.md#statuscode)
- [url](server.HttpNetworkAuthenticationRequired.md#url)
- [STATUS](server.HttpNetworkAuthenticationRequired.md#status)

## Constructors

### constructor

• **new HttpNetworkAuthenticationRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `511`
