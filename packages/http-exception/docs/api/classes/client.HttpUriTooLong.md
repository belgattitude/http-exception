[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpUriTooLong

# Class: HttpUriTooLong

[client](../modules/client.md).HttpUriTooLong

414 URI too long (client)

The URI requested by the client is longer than the server is willing to interpret.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
- https://httpstatus.in/414/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUriTooLong`**

## Table of contents

### Constructors

- [constructor](client.HttpUriTooLong.md#constructor)

### Properties

- [statusCode](client.HttpUriTooLong.md#statuscode)
- [url](client.HttpUriTooLong.md#url)
- [STATUS](client.HttpUriTooLong.md#status)

## Constructors

### constructor

• **new HttpUriTooLong**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `414`
