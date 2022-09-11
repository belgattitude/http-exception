[@belgattitude/http-exception - v0.1.1](../README.md) / [client](../modules/client.md) / HttpUnsupportedMediaType

# Class: HttpUnsupportedMediaType

[client](../modules/client.md).HttpUnsupportedMediaType

Client status 415

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnsupportedMediaType`**

## Table of contents

### Constructors

- [constructor](client.HttpUnsupportedMediaType.md#constructor)

### Properties

- [statusCode](client.HttpUnsupportedMediaType.md#statuscode)
- [url](client.HttpUnsupportedMediaType.md#url)
- [STATUS](client.HttpUnsupportedMediaType.md#status)

## Constructors

### constructor

• **new HttpUnsupportedMediaType**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `415`
