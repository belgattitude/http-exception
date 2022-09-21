[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpInternalServerError

# Class: HttpInternalServerError

[server](../modules/server.md).HttpInternalServerError

500 Internal Server Error (server)

The server has encountered a situation it does not know how to handle.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
- https://httpstatus.in/500/

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpInternalServerError`**

## Table of contents

### Constructors

- [constructor](server.HttpInternalServerError.md#constructor)

### Properties

- [cause](server.HttpInternalServerError.md#cause)
- [statusCode](server.HttpInternalServerError.md#statuscode)
- [url](server.HttpInternalServerError.md#url)
- [STATUS](server.HttpInternalServerError.md#status)

## Constructors

### constructor

• **new HttpInternalServerError**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpServerException](base.HttpServerException.md).[constructor](base.HttpServerException.md#constructor)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

If set and the runtime (browser or node) supports it
you can get back the error cause

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause

#### Inherited from

[HttpServerException](base.HttpServerException.md).[cause](base.HttpServerException.md#cause)

---

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

▪ `Static` `Readonly` **STATUS**: `500`
