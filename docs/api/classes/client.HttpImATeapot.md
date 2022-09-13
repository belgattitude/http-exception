[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpImATeapot

# Class: HttpImATeapot

[client](../modules/client.md).HttpImATeapot

418 I'm a teapot (client)

The server refuses the attempt to brew coffee with a teapot.

**`See`**

https://httpstatus.in/418/

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpImATeapot`**

## Table of contents

### Constructors

- [constructor](client.HttpImATeapot.md#constructor)

### Properties

- [statusCode](client.HttpImATeapot.md#statuscode)
- [url](client.HttpImATeapot.md#url)
- [STATUS](client.HttpImATeapot.md#status)

## Constructors

### constructor

• **new HttpImATeapot**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `418`
