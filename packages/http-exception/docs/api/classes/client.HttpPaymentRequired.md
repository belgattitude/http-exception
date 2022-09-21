[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpPaymentRequired

# Class: HttpPaymentRequired

[client](../modules/client.md).HttpPaymentRequired

402 Payment required (client)

This response code is reserved for future use. The initial aim for creating this code was using it for digital
payment systems, however this status code is used very rarely and no standard convention exists.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
- https://httpstatus.in/402/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPaymentRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpPaymentRequired.md#constructor)

### Properties

- [cause](client.HttpPaymentRequired.md#cause)
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

▪ `Static` `Readonly` **STATUS**: `402`
