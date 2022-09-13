[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [server](../modules/server.md) / HttpInsufficientStorage

# Class: HttpInsufficientStorage

[server](../modules/server.md).HttpInsufficientStorage

Server status 507 - webdav specific

**`See`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpInsufficientStorage`**

## Table of contents

### Constructors

- [constructor](server.HttpInsufficientStorage.md#constructor)

### Properties

- [statusCode](server.HttpInsufficientStorage.md#statuscode)
- [url](server.HttpInsufficientStorage.md#url)
- [STATUS](server.HttpInsufficientStorage.md#status)

## Constructors

### constructor

• **new HttpInsufficientStorage**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `507`
