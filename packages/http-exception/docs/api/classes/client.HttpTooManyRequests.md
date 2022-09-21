[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpTooManyRequests

# Class: HttpTooManyRequests

[client](../modules/client.md).HttpTooManyRequests

429 Too Many Requests (client)

The user has sent too many requests in a given amount of time ("rate limiting").

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
- https://httpstatus.in/429/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpTooManyRequests`**

## Table of contents

### Constructors

- [constructor](client.HttpTooManyRequests.md#constructor)

### Properties

- [cause](client.HttpTooManyRequests.md#cause)
- [message](client.HttpTooManyRequests.md#message)
- [name](client.HttpTooManyRequests.md#name)
- [stack](client.HttpTooManyRequests.md#stack)
- [statusCode](client.HttpTooManyRequests.md#statuscode)
- [url](client.HttpTooManyRequests.md#url)
- [STATUS](client.HttpTooManyRequests.md#status)
- [prepareStackTrace](client.HttpTooManyRequests.md#preparestacktrace)
- [stackTraceLimit](client.HttpTooManyRequests.md#stacktracelimit)

### Methods

- [captureStackTrace](client.HttpTooManyRequests.md#capturestacktrace)

## Constructors

### constructor

• **new HttpTooManyRequests**(`msgOrParams?`)

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

### message

• **message**: `string`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[message](base.HttpClientException.md#message)

---

### name

• **name**: `string`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[name](base.HttpClientException.md#name)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[stack](base.HttpClientException.md#stack)

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

▪ `Static` `Readonly` **STATUS**: `429`

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[prepareStackTrace](base.HttpClientException.md#preparestacktrace)

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[stackTraceLimit](base.HttpClientException.md#stacktracelimit)

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[captureStackTrace](base.HttpClientException.md#capturestacktrace)
