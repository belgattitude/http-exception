[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpRequestHeaderFieldsTooLarge

# Class: HttpRequestHeaderFieldsTooLarge

[client](../modules/client.md).HttpRequestHeaderFieldsTooLarge

431 Request Header Fields Too Large (client)

The server is unwilling to process the request because its header fields are too large.
The request may be resubmitted after reducing the size of the request header fields.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
- https://httpstatus.in/431/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpRequestHeaderFieldsTooLarge`**

## Table of contents

### Constructors

- [constructor](client.HttpRequestHeaderFieldsTooLarge.md#constructor)

### Properties

- [statusCode](client.HttpRequestHeaderFieldsTooLarge.md#statuscode)
- [url](client.HttpRequestHeaderFieldsTooLarge.md#url)
- [STATUS](client.HttpRequestHeaderFieldsTooLarge.md#status)

## Constructors

### constructor

• **new HttpRequestHeaderFieldsTooLarge**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `431`
