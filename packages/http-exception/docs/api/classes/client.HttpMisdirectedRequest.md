[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpMisdirectedRequest

# Class: HttpMisdirectedRequest

[client](../modules/client.md).HttpMisdirectedRequest

421 Misdirected Request (client)

The request was directed at a server that is not able to produce a response. This can be sent by a server that
is not configured to produce responses for the combination of scheme and authority that are included
in the request URI.

**`See`**

https://httpstatus.in/421/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpMisdirectedRequest`**

## Table of contents

### Constructors

- [constructor](client.HttpMisdirectedRequest.md#constructor)

### Properties

- [cause](client.HttpMisdirectedRequest.md#cause)
- [statusCode](client.HttpMisdirectedRequest.md#statuscode)
- [url](client.HttpMisdirectedRequest.md#url)
- [STATUS](client.HttpMisdirectedRequest.md#status)

## Constructors

### constructor

• **new HttpMisdirectedRequest**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `421`
