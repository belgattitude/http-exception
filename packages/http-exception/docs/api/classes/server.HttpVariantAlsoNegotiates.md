[@belgattitude/http-exception](../README.md) / [server](../modules/server.md) / HttpVariantAlsoNegotiates

# Class: HttpVariantAlsoNegotiates

[server](../modules/server.md).HttpVariantAlsoNegotiates

506 Variant Also Negotiates (server)

The server has an internal configuration error: the chosen variant resource is configured to engage
in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
- https://httpstatus.in/506/

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpVariantAlsoNegotiates`**

## Table of contents

### Constructors

- [constructor](server.HttpVariantAlsoNegotiates.md#constructor)

### Properties

- [statusCode](server.HttpVariantAlsoNegotiates.md#statuscode)
- [url](server.HttpVariantAlsoNegotiates.md#url)
- [STATUS](server.HttpVariantAlsoNegotiates.md#status)

## Constructors

### constructor

• **new HttpVariantAlsoNegotiates**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpServerException](base.HttpServerException.md).[constructor](base.HttpServerException.md#constructor)

## Properties

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

▪ `Static` `Readonly` **STATUS**: `506`
