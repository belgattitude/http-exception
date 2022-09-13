[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpNotImplemented

# Class: HttpNotImplemented

[server](../modules/server.md).HttpNotImplemented

501 Not Implemented

The request method is not supported by the server and cannot be handled. The only methods that
servers are required to support (and therefore that must not return this code) are GET and HEAD.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
- https://httpstatus.in/501/

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpNotImplemented`**

## Table of contents

### Constructors

- [constructor](server.HttpNotImplemented.md#constructor)

### Properties

- [statusCode](server.HttpNotImplemented.md#statuscode)
- [url](server.HttpNotImplemented.md#url)
- [STATUS](server.HttpNotImplemented.md#status)

## Constructors

### constructor

• **new HttpNotImplemented**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `501`
