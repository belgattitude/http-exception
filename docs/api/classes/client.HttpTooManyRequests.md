[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpTooManyRequests

# Class: HttpTooManyRequests

[client](../modules/client.md).HttpTooManyRequests

429 Too Many Requests (client)

The user has sent too many requests in a given amount of time ("rate limiting").

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
- https://httpstatus.in/429/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpTooManyRequests`**

## Table of contents

### Constructors

- [constructor](client.HttpTooManyRequests.md#constructor)

### Properties

- [statusCode](client.HttpTooManyRequests.md#statuscode)
- [url](client.HttpTooManyRequests.md#url)
- [STATUS](client.HttpTooManyRequests.md#status)

## Constructors

### constructor

• **new HttpTooManyRequests**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `429`
