[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpMisredirectedRequest

# Class: HttpMisredirectedRequest

[client](../modules/client.md).HttpMisredirectedRequest

421 Misdirected Request (client)

The request was directed at a server that is not able to produce a response. This can be sent by a server that
is not configured to produce responses for the combination of scheme and authority that are included
in the request URI.

**`See`**

https://httpstatus.in/421/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpMisredirectedRequest`**

## Table of contents

### Constructors

- [constructor](client.HttpMisredirectedRequest.md#constructor)

### Properties

- [statusCode](client.HttpMisredirectedRequest.md#statuscode)
- [url](client.HttpMisredirectedRequest.md#url)
- [STATUS](client.HttpMisredirectedRequest.md#status)

## Constructors

### constructor

• **new HttpMisredirectedRequest**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `421`
