[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpUnsupportedMediaType

# Class: HttpUnsupportedMediaType

[client](../modules/client.md).HttpUnsupportedMediaType

415 Unsupported Media Type (client)

The media format of the requested data is not supported by the server, so the server is rejecting the request.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
- https://httpstatus.in/415/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnsupportedMediaType`**

## Table of contents

### Constructors

- [constructor](client.HttpUnsupportedMediaType.md#constructor)

### Properties

- [statusCode](client.HttpUnsupportedMediaType.md#statuscode)
- [url](client.HttpUnsupportedMediaType.md#url)
- [STATUS](client.HttpUnsupportedMediaType.md#status)

## Constructors

### constructor

• **new HttpUnsupportedMediaType**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `415`
