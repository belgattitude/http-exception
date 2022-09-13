[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpBadRequest

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

▪ `Static` `Readonly` **STATUS**: `400`
