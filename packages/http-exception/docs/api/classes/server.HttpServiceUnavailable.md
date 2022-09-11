[@belgattitude/http-exception - v0.1.0](../README.md) / [server](../modules/server.md) / HttpServiceUnavailable

# Class: HttpServiceUnavailable

[server](../modules/server.md).HttpServiceUnavailable

Server status 503

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpServiceUnavailable`**

## Table of contents

### Constructors

- [constructor](server.HttpServiceUnavailable.md#constructor)

### Properties

- [statusCode](server.HttpServiceUnavailable.md#statuscode)
- [url](server.HttpServiceUnavailable.md#url)
- [STATUS](server.HttpServiceUnavailable.md#status)

## Constructors

### constructor

• **new HttpServiceUnavailable**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                 |
| :------------- | :------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpErrorParams`](../modules/types.md#httperrorparams) |

#### Overrides

[HttpServerException](base.HttpServerException.md).[constructor](base.HttpServerException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

#### Inherited from

[HttpServerException](base.HttpServerException.md).[statusCode](base.HttpServerException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error

#### Inherited from

[HttpServerException](base.HttpServerException.md).[url](base.HttpServerException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `503`
