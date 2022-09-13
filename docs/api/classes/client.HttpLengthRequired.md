[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpLengthRequired

# Class: HttpLengthRequired

[client](../modules/client.md).HttpLengthRequired

411 Length required

Server rejected the request because the Content-Length header field is not defined and the server requires it.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411

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

▪ `Static` `Readonly` **STATUS**: `411`
