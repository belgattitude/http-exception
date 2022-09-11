[@belgattitude/http-exception - v0.1.0](../README.md) / [client](../modules/client.md) / HttpMisredirectedRequest

# Class: HttpMisredirectedRequest

[client](../modules/client.md).HttpMisredirectedRequest

Client status 421

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpMisredirectedRequest`**

## Table of contents

### Constructors

- [constructor](client.HttpMisredirectedRequest.md#constructor)

### Properties

- [statusCode](client.HttpMisredirectedRequest.md#statuscode)
- [url](client.HttpMisredirectedRequest.md#url)
- [STATUS](client.HttpMisredirectedRequest.md#status)

## Constructors

### constructor

• **new HttpMisredirectedRequest**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `421`
