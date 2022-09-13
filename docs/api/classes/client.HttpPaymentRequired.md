[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpPaymentRequired

# Class: HttpPaymentRequired

[client](../modules/client.md).HttpPaymentRequired

402 Payment required (client)

This response code is reserved for future use. The initial aim for creating this code was using it for digital
payment systems, however this status code is used very rarely and no standard convention exists.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPaymentRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpPaymentRequired.md#constructor)

### Properties

- [statusCode](client.HttpPaymentRequired.md#statuscode)
- [url](client.HttpPaymentRequired.md#url)
- [STATUS](client.HttpPaymentRequired.md#status)

## Constructors

### constructor

• **new HttpPaymentRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `402`
