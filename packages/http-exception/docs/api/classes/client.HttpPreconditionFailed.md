[@belgattitude/http-exception - v0.1.0](../README.md) / [client](../modules/client.md) / HttpPreconditionFailed

# Class: HttpPreconditionFailed

[client](../modules/client.md).HttpPreconditionFailed

Client status 412

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPreconditionFailed`**

## Table of contents

### Constructors

- [constructor](client.HttpPreconditionFailed.md#constructor)

### Properties

- [statusCode](client.HttpPreconditionFailed.md#statuscode)
- [url](client.HttpPreconditionFailed.md#url)
- [STATUS](client.HttpPreconditionFailed.md#status)

## Constructors

### constructor

• **new HttpPreconditionFailed**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `412`
