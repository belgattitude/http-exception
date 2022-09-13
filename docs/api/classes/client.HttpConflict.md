[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpConflict

# Class: HttpConflict

[client](../modules/client.md).HttpConflict

409 Conflict (client)

This response is sent when a request conflicts with the current state of the server.

**`See`**

- https://httpstatus.in/409/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpConflict`**

## Table of contents

### Constructors

- [constructor](client.HttpConflict.md#constructor)

### Properties

- [statusCode](client.HttpConflict.md#statuscode)
- [url](client.HttpConflict.md#url)
- [STATUS](client.HttpConflict.md#status)

## Constructors

### constructor

• **new HttpConflict**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `409`
