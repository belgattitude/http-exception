[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpConflict

# Class: HttpConflict

[client](../modules/client.md).HttpConflict

409 Conflict (client)

This response is sent when a request conflicts with the current state of the server.

**`See`**

- https://httpstatus.in/409/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpConflict`**

## Table of contents

### Constructors

- [constructor](client.HttpConflict.md#constructor)

### Properties

- [cause](client.HttpConflict.md#cause)
- [statusCode](client.HttpConflict.md#statuscode)
- [url](client.HttpConflict.md#url)
- [STATUS](client.HttpConflict.md#status)

## Constructors

### constructor

• **new HttpConflict**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `409`
