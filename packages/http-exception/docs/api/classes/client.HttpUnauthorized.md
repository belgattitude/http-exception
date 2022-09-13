[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpUnauthorized

# Class: HttpUnauthorized

[client](../modules/client.md).HttpUnauthorized

401 Unauthorized (client)

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
That is, the client must authenticate itself to get the requested response.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
- https://httpstatus.in/401/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnauthorized`**

## Table of contents

### Constructors

- [constructor](client.HttpUnauthorized.md#constructor)

### Properties

- [statusCode](client.HttpUnauthorized.md#statuscode)
- [url](client.HttpUnauthorized.md#url)
- [STATUS](client.HttpUnauthorized.md#status)

## Constructors

### constructor

• **new HttpUnauthorized**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `401`
