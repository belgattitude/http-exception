[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpNotAcceptable

# Class: HttpNotAcceptable

[client](../modules/client.md).HttpNotAcceptable

406 Not acceptable (client)

This response is sent when the web server, after performing server-driven content negotiation, doesn't find
any content that conforms to the criteria given by the user agent.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpNotAcceptable`**

## Table of contents

### Constructors

- [constructor](client.HttpNotAcceptable.md#constructor)

### Properties

- [statusCode](client.HttpNotAcceptable.md#statuscode)
- [url](client.HttpNotAcceptable.md#url)
- [STATUS](client.HttpNotAcceptable.md#status)

## Constructors

### constructor

• **new HttpNotAcceptable**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `406`
