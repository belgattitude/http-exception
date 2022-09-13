[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpPayloadTooLarge

# Class: HttpPayloadTooLarge

[client](../modules/client.md).HttpPayloadTooLarge

413 Payload too large (client)

Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
- https://httpstatus.in/413/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPayloadTooLarge`**

## Table of contents

### Constructors

- [constructor](client.HttpPayloadTooLarge.md#constructor)

### Properties

- [statusCode](client.HttpPayloadTooLarge.md#statuscode)
- [url](client.HttpPayloadTooLarge.md#url)
- [STATUS](client.HttpPayloadTooLarge.md#status)

## Constructors

### constructor

• **new HttpPayloadTooLarge**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `413`
