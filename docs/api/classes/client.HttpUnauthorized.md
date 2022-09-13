[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpUnauthorized

# Class: HttpUnauthorized

[client](../modules/client.md).HttpUnauthorized

401 Unauthorized (client)

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
That is, the client must authenticate itself to get the requested response.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401

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

▪ `Static` `Readonly` **STATUS**: `401`
