[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpNotAcceptable

# Class: HttpNotAcceptable

[client](../modules/client.md).HttpNotAcceptable

406 Not acceptable (client)

This response is sent when the web server, after performing server-driven content negotiation, doesn't find
any content that conforms to the criteria given by the user agent.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
- https://httpstatus.in/406/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpNotAcceptable`**

## Table of contents

### Constructors

- [constructor](client.HttpNotAcceptable.md#constructor)

### Properties

- [cause](client.HttpNotAcceptable.md#cause)
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

▪ `Static` `Readonly` **STATUS**: `406`
