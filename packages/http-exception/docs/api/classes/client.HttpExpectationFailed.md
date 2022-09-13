[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpExpectationFailed

# Class: HttpExpectationFailed

[client](../modules/client.md).HttpExpectationFailed

Client status 417

The HTTP 417 Expectation Failed client error response code indicates that the expectation given
in the request's Expect header could not be met.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
- https://httpstatus.in/417/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpExpectationFailed`**

## Table of contents

### Constructors

- [constructor](client.HttpExpectationFailed.md#constructor)

### Properties

- [statusCode](client.HttpExpectationFailed.md#statuscode)
- [url](client.HttpExpectationFailed.md#url)
- [STATUS](client.HttpExpectationFailed.md#status)

## Constructors

### constructor

• **new HttpExpectationFailed**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `417`
