[@belgattitude/http-exception - v0.1.0](../README.md) / [client](../modules/client.md) / HttpUnprocessableEntity

# Class: HttpUnprocessableEntity

[client](../modules/client.md).HttpUnprocessableEntity

Client status 422

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnprocessableEntity`**

## Table of contents

### Constructors

- [constructor](client.HttpUnprocessableEntity.md#constructor)

### Properties

- [statusCode](client.HttpUnprocessableEntity.md#statuscode)
- [url](client.HttpUnprocessableEntity.md#url)
- [STATUS](client.HttpUnprocessableEntity.md#status)

## Constructors

### constructor

• **new HttpUnprocessableEntity**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `422`
