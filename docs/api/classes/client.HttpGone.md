[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / [client](../modules/client.md) / HttpGone

# Class: HttpGone

[client](../modules/client.md).HttpGone

410 Gone (client)

This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
Clients are expected to remove their caches and links to the resource. The HTTP specification intends
this status code to be used for "limited-time, promotional services".

APIs should not feel compelled to indicate resources that have been deleted with this status code.

**`Belgattitude`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpGone`**

## Table of contents

### Constructors

- [constructor](client.HttpGone.md#constructor)

### Properties

- [statusCode](client.HttpGone.md#statuscode)
- [url](client.HttpGone.md#url)
- [STATUS](client.HttpGone.md#status)

## Constructors

### constructor

• **new HttpGone**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `410`
