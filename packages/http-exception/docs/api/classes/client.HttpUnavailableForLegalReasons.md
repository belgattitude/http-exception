[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpUnavailableForLegalReasons

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

- [cause](client.HttpUnavailableForLegalReasons.md#cause)
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

▪ `Static` `Readonly` **STATUS**: `451`
