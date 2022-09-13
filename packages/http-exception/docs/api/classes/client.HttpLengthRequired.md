[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpLengthRequired

# Class: HttpLengthRequired

[client](../modules/client.md).HttpLengthRequired

411 Length required

Server rejected the request because the Content-Length header field is not defined and the server requires it.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
- https://httpstatus.in/411/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpLengthRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpLengthRequired.md#constructor)

### Properties

- [statusCode](client.HttpLengthRequired.md#statuscode)
- [url](client.HttpLengthRequired.md#url)
- [STATUS](client.HttpLengthRequired.md#status)

## Constructors

### constructor

• **new HttpLengthRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `411`
