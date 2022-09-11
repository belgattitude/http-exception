[@belgattitude/http-exception - v0.1.0](../README.md) / [client](../modules/client.md) / HttpRequestTimeout

# Class: HttpRequestTimeout

[client](../modules/client.md).HttpRequestTimeout

Client status 408

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpRequestTimeout`**

## Table of contents

### Constructors

- [constructor](client.HttpRequestTimeout.md#constructor)

### Properties

- [statusCode](client.HttpRequestTimeout.md#statuscode)
- [url](client.HttpRequestTimeout.md#url)
- [STATUS](client.HttpRequestTimeout.md#status)

## Constructors

### constructor

• **new HttpRequestTimeout**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `408`
