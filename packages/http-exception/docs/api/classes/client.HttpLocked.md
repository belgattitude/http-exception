[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpLocked

# Class: HttpLocked

[client](../modules/client.md).HttpLocked

423 Locked (client / webdav specific)

The source or destination resource of a method is locked. This response SHOULD contain an
appropriate precondition or postcondition code, such as ‘lock-token-submitted’ or ‘no-conflicting-lock’.

**`See`**

https://httpstatus.in/423/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpLocked`**

## Table of contents

### Constructors

- [constructor](client.HttpLocked.md#constructor)

### Properties

- [statusCode](client.HttpLocked.md#statuscode)
- [url](client.HttpLocked.md#url)
- [STATUS](client.HttpLocked.md#status)

## Constructors

### constructor

• **new HttpLocked**(`msgOrParams?`)

#### Parameters

| Name           | Type                                                                         |
| :------------- | :--------------------------------------------------------------------------- |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

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

▪ `Static` `Readonly` **STATUS**: `423`
