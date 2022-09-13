[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpNotFound

# Class: HttpNotFound

[client](../modules/client.md).HttpNotFound

404 - Not found (client)

The server can not find the requested resource. In the browser, this means the URL is not recognized.
In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an
unauthorized client.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
- https://httpstatus.in/404/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpNotFound`**

## Table of contents

### Constructors

- [constructor](client.HttpNotFound.md#constructor)

### Properties

- [statusCode](client.HttpNotFound.md#statuscode)
- [url](client.HttpNotFound.md#url)
- [STATUS](client.HttpNotFound.md#status)

## Constructors

### constructor

• **new HttpNotFound**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code (400-599)

#### Inherited from

[HttpClientException](base.HttpClientException.md).[statusCode](base.HttpClientException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Indicates the original url that caused the error.

#### Inherited from

[HttpClientException](base.HttpClientException.md).[url](base.HttpClientException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `404`