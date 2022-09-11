[@belgattitude/http-exception - v0.1.0](../README.md) / [server](../modules/server.md) / HttpNetworkAuthenticationRequired

# Class: HttpNetworkAuthenticationRequired

[server](../modules/server.md).HttpNetworkAuthenticationRequired

Server status 511

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpNetworkAuthenticationRequired`**

## Table of contents

### Constructors

- [constructor](server.HttpNetworkAuthenticationRequired.md#constructor)

### Properties

- [statusCode](server.HttpNetworkAuthenticationRequired.md#statuscode)
- [url](server.HttpNetworkAuthenticationRequired.md#url)
- [STATUS](server.HttpNetworkAuthenticationRequired.md#status)

## Constructors

### constructor

• **new HttpNetworkAuthenticationRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `511`
