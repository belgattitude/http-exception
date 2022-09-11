[@belgattitude/http-exception - v0.1.0](../README.md) / [client](../modules/client.md) / HttpProxyAuthenticationRequired

# Class: HttpProxyAuthenticationRequired

[client](../modules/client.md).HttpProxyAuthenticationRequired

Client status 407

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407

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

| Name           | Type                                                                 |
| :------------- | :------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpErrorParams`](../modules/types.md#httperrorparams) |

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

▪ `Static` `Readonly` **STATUS**: `407`
