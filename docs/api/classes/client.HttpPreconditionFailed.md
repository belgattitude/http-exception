[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpPreconditionFailed

# Class: HttpPreconditionFailed

[client](../modules/client.md).HttpPreconditionFailed

412 Precondition Failed (client)

The client has indicated preconditions in its headers which the server does not meet.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPreconditionFailed`**

## Table of contents

### Constructors

- [constructor](client.HttpPreconditionFailed.md#constructor)

### Properties

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

▪ `Static` `Readonly` **STATUS**: `412`
