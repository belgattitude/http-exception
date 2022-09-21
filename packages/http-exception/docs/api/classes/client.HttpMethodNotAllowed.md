[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpMethodNotAllowed

# Class: HttpMethodNotAllowed

[client](../modules/client.md).HttpMethodNotAllowed

405 Method not allowed (client)

The request method is known by the server but is not supported by the target resource.
For example, an API may not allow calling DELETE to remove a resource.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
- https://httpstatus.in/405/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpMethodNotAllowed`**

## Table of contents

### Constructors

- [constructor](client.HttpMethodNotAllowed.md#constructor)

### Properties

- [cause](client.HttpMethodNotAllowed.md#cause)
- [statusCode](client.HttpMethodNotAllowed.md#statuscode)
- [url](client.HttpMethodNotAllowed.md#url)
- [STATUS](client.HttpMethodNotAllowed.md#status)

## Constructors

### constructor

• **new HttpMethodNotAllowed**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `405`
