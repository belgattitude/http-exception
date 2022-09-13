[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpUnprocessableEntity

# Class: HttpUnprocessableEntity

[client](../modules/client.md).HttpUnprocessableEntity

422 Unprocessable entity (client / webdav specific)

The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code
is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is
inappropriate) but was unable to process the contained instructions.

For example, this error condition may occur if an XML request body contains well-formed
(i.e., syntactically correct), but semantically erroneous, XML instructions.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
- https://httpstatus.in/422/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnprocessableEntity`**

## Table of contents

### Constructors

- [constructor](client.HttpUnprocessableEntity.md#constructor)

### Properties

- [statusCode](client.HttpUnprocessableEntity.md#statuscode)
- [url](client.HttpUnprocessableEntity.md#url)
- [STATUS](client.HttpUnprocessableEntity.md#status)

## Constructors

### constructor

• **new HttpUnprocessableEntity**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

#### Inherited from

[HttpClientException](base.HttpClientException.md).[statusCode](base.HttpClientException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error

#### Inherited from

[HttpClientException](base.HttpClientException.md).[url](base.HttpClientException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `422`
