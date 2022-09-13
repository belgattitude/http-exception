[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpFailedDependency

# Class: HttpFailedDependency

[client](../modules/client.md).HttpFailedDependency

424 Failed dependency (client / webdav specific)

The method could not be performed on the resource because the requested action depended on another action
and that action failed.

For example, if a command in a PROPPATCH method fails, then, at minimum, the rest of the commands will
also fail with 424 Failed Dependency.

**`See`**

https://httpstatus.in/424/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpFailedDependency`**

## Table of contents

### Constructors

- [constructor](client.HttpFailedDependency.md#constructor)

### Properties

- [statusCode](client.HttpFailedDependency.md#statuscode)
- [url](client.HttpFailedDependency.md#url)
- [STATUS](client.HttpFailedDependency.md#status)

## Constructors

### constructor

• **new HttpFailedDependency**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `424`
