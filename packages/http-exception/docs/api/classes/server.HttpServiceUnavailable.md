[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpServiceUnavailable

# Class: HttpServiceUnavailable

[server](../modules/server.md).HttpServiceUnavailable

503 Service Unavailable

The server is not ready to handle the request. Common causes are a server that is down for maintenance
or that is overloaded. Note that together with this response, a user-friendly page explaining the problem
should be sent.

This response should be used for temporary conditions and the Retry-After HTTP header should, if possible,
contain the estimated time before the recovery of the service. The webmaster must also take care about the
caching-related headers that are sent along with this response, as these temporary condition responses
should usually not be cached.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
- https://httpstatus.in/503/

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpServiceUnavailable`**

## Table of contents

### Constructors

- [constructor](server.HttpServiceUnavailable.md#constructor)

### Properties

- [cause](server.HttpServiceUnavailable.md#cause)
- [statusCode](server.HttpServiceUnavailable.md#statuscode)
- [url](server.HttpServiceUnavailable.md#url)
- [STATUS](server.HttpServiceUnavailable.md#status)

## Constructors

### constructor

• **new HttpServiceUnavailable**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpServerException](base.HttpServerException.md).[constructor](base.HttpServerException.md#constructor)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

If set and the runtime (browser or node) supports it
you can get back the error cause

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause

#### Inherited from

[HttpServerException](base.HttpServerException.md).[cause](base.HttpServerException.md#cause)

---

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code (400-599)

#### Inherited from

[HttpServerException](base.HttpServerException.md).[statusCode](base.HttpServerException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Indicates the original url that caused the error.

#### Inherited from

[HttpServerException](base.HttpServerException.md).[url](base.HttpServerException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `503`
