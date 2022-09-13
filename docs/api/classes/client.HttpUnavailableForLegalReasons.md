[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpUnavailableForLegalReasons

# Class: HttpUnavailableForLegalReasons

[client](../modules/client.md).HttpUnavailableForLegalReasons

451 Unavailable For Legal Reasons (client)

The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
- https://httpstatus.in/451/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnavailableForLegalReasons`**

## Table of contents

### Constructors

- [constructor](client.HttpUnavailableForLegalReasons.md#constructor)

### Properties

- [statusCode](client.HttpUnavailableForLegalReasons.md#statuscode)
- [url](client.HttpUnavailableForLegalReasons.md#url)
- [STATUS](client.HttpUnavailableForLegalReasons.md#status)

## Constructors

### constructor

• **new HttpUnavailableForLegalReasons**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `451`
