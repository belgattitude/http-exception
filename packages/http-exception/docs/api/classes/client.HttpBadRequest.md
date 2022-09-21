[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpBadRequest

# Class: HttpBadRequest

[client](../modules/client.md).HttpBadRequest

400 Bad Request (client)

The server cannot or will not process the request due to something that is perceived to be a client error
(e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

**`See`**

- https://httpstatus.in/400/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpBadRequest`**

## Table of contents

### Constructors

- [constructor](client.HttpBadRequest.md#constructor)

### Properties

- [cause](client.HttpBadRequest.md#cause)
- [statusCode](client.HttpBadRequest.md#statuscode)
- [url](client.HttpBadRequest.md#url)
- [STATUS](client.HttpBadRequest.md#status)

## Constructors

### constructor

• **new HttpBadRequest**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

If set and the runtime (browser or node) supports it
you can get back the error cause

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause

#### Inherited from

[HttpClientException](base.HttpClientException.md).[cause](base.HttpClientException.md#cause)

---

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

▪ `Static` `Readonly` **STATUS**: `400`
