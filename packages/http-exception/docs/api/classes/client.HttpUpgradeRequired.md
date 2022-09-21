[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpUpgradeRequired

# Class: HttpUpgradeRequired

[client](../modules/client.md).HttpUpgradeRequired

426 Upgrade Required (client)

The server refuses to perform the request using the current protocol but might be willing to do so after
the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response
to indicate the required protocol(s).

**`See`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUpgradeRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpUpgradeRequired.md#constructor)

### Properties

- [cause](client.HttpUpgradeRequired.md#cause)
- [statusCode](client.HttpUpgradeRequired.md#statuscode)
- [url](client.HttpUpgradeRequired.md#url)
- [STATUS](client.HttpUpgradeRequired.md#status)

## Constructors

### constructor

• **new HttpUpgradeRequired**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

If set and the runtime (browser or node) supports it
you can get back the error cause

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause

#### Inherited from

[HttpClientException](base.HttpClientException.md).[cause](base.HttpClientException.md#cause)

---

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code (400-599)

#### Inherited from

[HttpClientException](base.HttpClientException.md).[statusCode](base.HttpClientException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Indicates the original url that caused the error.

#### Inherited from

[HttpClientException](base.HttpClientException.md).[url](base.HttpClientException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `426`
