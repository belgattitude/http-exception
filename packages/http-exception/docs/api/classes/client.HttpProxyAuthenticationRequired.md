[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpProxyAuthenticationRequired

# Class: HttpProxyAuthenticationRequired

[client](../modules/client.md).HttpProxyAuthenticationRequired

407 Proxy authentication required (client)

This is similar to 401 Unauthorized but authentication is needed to be done by a proxy

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
- https://httpstatus.in/407/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpProxyAuthenticationRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpProxyAuthenticationRequired.md#constructor)

### Properties

- [statusCode](client.HttpProxyAuthenticationRequired.md#statuscode)
- [url](client.HttpProxyAuthenticationRequired.md#url)
- [STATUS](client.HttpProxyAuthenticationRequired.md#status)

## Constructors

### constructor

• **new HttpProxyAuthenticationRequired**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

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

▪ `Static` `Readonly` **STATUS**: `407`
