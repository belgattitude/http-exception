[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpForbidden

# Class: HttpForbidden

[client](../modules/client.md).HttpForbidden

403 Forbidden (client)

The client does not have access rights to the content; that is, it is unauthorized, so the server
is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpForbidden`**

## Table of contents

### Constructors

- [constructor](client.HttpForbidden.md#constructor)

### Properties

- [statusCode](client.HttpForbidden.md#statuscode)
- [url](client.HttpForbidden.md#url)
- [STATUS](client.HttpForbidden.md#status)

## Constructors

### constructor

• **new HttpForbidden**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `403`
