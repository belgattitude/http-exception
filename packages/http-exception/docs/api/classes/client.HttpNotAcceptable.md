[@belgattitude/http-exception - v0.1.0](../README.md) / [client](../modules/client.md) / HttpNotAcceptable

# Class: HttpNotAcceptable

[client](../modules/client.md).HttpNotAcceptable

Client status 406

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpNotAcceptable`**

## Table of contents

### Constructors

- [constructor](client.HttpNotAcceptable.md#constructor)

### Properties

- [statusCode](client.HttpNotAcceptable.md#statuscode)
- [url](client.HttpNotAcceptable.md#url)
- [STATUS](client.HttpNotAcceptable.md#status)

## Constructors

### constructor

• **new HttpNotAcceptable**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `406`
