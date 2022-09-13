[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpTooEarly

# Class: HttpTooEarly

[client](../modules/client.md).HttpTooEarly

425 Too early (client / experimental)

Indicates that the server is unwilling to risk processing a request that might be replayed.

**`See`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpTooEarly`**

## Table of contents

### Constructors

- [constructor](client.HttpTooEarly.md#constructor)

### Properties

- [statusCode](client.HttpTooEarly.md#statuscode)
- [url](client.HttpTooEarly.md#url)
- [STATUS](client.HttpTooEarly.md#status)

## Constructors

### constructor

• **new HttpTooEarly**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `425`
