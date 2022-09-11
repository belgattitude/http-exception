[@belgattitude/http-exception - v0.1.0](../README.md) / [client](../modules/client.md) / HttpTooEarly

# Class: HttpTooEarly

[client](../modules/client.md).HttpTooEarly

Client status 425
Experimental: expect this behaviour to change in the future

**`Link`**

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

| Name           | Type                                                                 |
| :------------- | :------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpErrorParams`](../modules/types.md#httperrorparams) |

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

▪ `Static` `Readonly` **STATUS**: `425`
