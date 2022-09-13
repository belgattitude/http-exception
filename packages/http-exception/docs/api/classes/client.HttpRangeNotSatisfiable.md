[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpRangeNotSatisfiable

# Class: HttpRangeNotSatisfiable

[client](../modules/client.md).HttpRangeNotSatisfiable

416 Range Not Satisfiable (client)

The range specified by the Range header field in the request cannot be fulfilled.
It's possible that the range is outside the size of the target URI's data.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
- https://httpstatus.in/416/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpRangeNotSatisfiable`**

## Table of contents

### Constructors

- [constructor](client.HttpRangeNotSatisfiable.md#constructor)

### Properties

- [statusCode](client.HttpRangeNotSatisfiable.md#statuscode)
- [url](client.HttpRangeNotSatisfiable.md#url)
- [STATUS](client.HttpRangeNotSatisfiable.md#status)

## Constructors

### constructor

• **new HttpRangeNotSatisfiable**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `416`
