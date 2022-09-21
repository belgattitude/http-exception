[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpInsufficientStorage

# Class: HttpInsufficientStorage

[server](../modules/server.md).HttpInsufficientStorage

507 Insufficient Storage (client / webdav specific)

The method could not be performed on the resource because the server is unable to store the representation
needed to successfully complete the request.

**`See`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpInsufficientStorage`**

## Table of contents

### Constructors

- [constructor](server.HttpInsufficientStorage.md#constructor)

### Properties

- [cause](server.HttpInsufficientStorage.md#cause)
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

▪ `Static` `Readonly` **STATUS**: `507`
