[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpMethodNotAllowed

# Class: HttpMethodNotAllowed

[client](../modules/client.md).HttpMethodNotAllowed

405 Method not allowed (client)

The request method is known by the server but is not supported by the target resource.
For example, an API may not allow calling DELETE to remove a resource.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpMethodNotAllowed`**

## Table of contents

### Constructors

- [constructor](client.HttpMethodNotAllowed.md#constructor)

### Properties

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

▪ `Static` `Readonly` **STATUS**: `405`
