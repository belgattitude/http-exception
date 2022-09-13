[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpVersionNotSupported

# Class: HttpVersionNotSupported

[server](../modules/server.md).HttpVersionNotSupported

505 HTTP Version Not Supported

The HTTP version used in the request is not supported by the server.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
- https://httpstatus.in/505/

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpVersionNotSupported`**

## Table of contents

### Constructors

- [constructor](server.HttpVersionNotSupported.md#constructor)

### Properties

- [statusCode](server.HttpVersionNotSupported.md#statuscode)
- [url](server.HttpVersionNotSupported.md#url)
- [STATUS](server.HttpVersionNotSupported.md#status)

## Constructors

### constructor

• **new HttpVersionNotSupported**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `505`
