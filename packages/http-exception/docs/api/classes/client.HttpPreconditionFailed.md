[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpPreconditionFailed

# Class: HttpPreconditionFailed

[client](../modules/client.md).HttpPreconditionFailed

412 Precondition Failed (client)

The client has indicated preconditions in its headers which the server does not meet.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
- https://httpstatus.in/412/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPreconditionFailed`**

## Table of contents

### Constructors

- [constructor](client.HttpPreconditionFailed.md#constructor)

### Properties

- [cause](client.HttpPreconditionFailed.md#cause)
- [statusCode](client.HttpPreconditionFailed.md#statuscode)
- [url](client.HttpPreconditionFailed.md#url)
- [STATUS](client.HttpPreconditionFailed.md#status)

## Constructors

### constructor

• **new HttpPreconditionFailed**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `412`
