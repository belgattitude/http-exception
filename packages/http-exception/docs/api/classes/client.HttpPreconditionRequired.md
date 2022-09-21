[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpPreconditionRequired

# Class: HttpPreconditionRequired

[client](../modules/client.md).HttpPreconditionRequired

428 Precondition Required (client)

The origin server requires the request to be conditional. This response is intended to prevent the
'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the
server, when meanwhile a third party has modified the state on the server, leading to a conflict.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
- https://httpstatus.in/428/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPreconditionRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpPreconditionRequired.md#constructor)

### Properties

- [cause](client.HttpPreconditionRequired.md#cause)
- [statusCode](client.HttpPreconditionRequired.md#statuscode)
- [url](client.HttpPreconditionRequired.md#url)
- [STATUS](client.HttpPreconditionRequired.md#status)

## Constructors

### constructor

• **new HttpPreconditionRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `428`
