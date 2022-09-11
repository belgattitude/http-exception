[@belgattitude/http-exception - v0.1.1](../README.md) / [client](../modules/client.md) / HttpGone

# Class: HttpGone

[client](../modules/client.md).HttpGone

Client status 410

**`Link`**

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

▪ `Static` `Readonly` **STATUS**: `410`
