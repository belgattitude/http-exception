[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpExpectationFailed

# Class: HttpExpectationFailed

[client](../modules/client.md).HttpExpectationFailed

Client status 417

The HTTP 417 Expectation Failed client error response code indicates that the expectation given
in the request's Expect header could not be met.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
- https://httpstatus.in/417/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpExpectationFailed`**

## Table of contents

### Constructors

- [constructor](client.HttpExpectationFailed.md#constructor)

### Properties

- [cause](client.HttpExpectationFailed.md#cause)
- [message](client.HttpExpectationFailed.md#message)
- [name](client.HttpExpectationFailed.md#name)
- [stack](client.HttpExpectationFailed.md#stack)
- [statusCode](client.HttpExpectationFailed.md#statuscode)
- [url](client.HttpExpectationFailed.md#url)
- [STATUS](client.HttpExpectationFailed.md#status)
- [prepareStackTrace](client.HttpExpectationFailed.md#preparestacktrace)
- [stackTraceLimit](client.HttpExpectationFailed.md#stacktracelimit)

### Methods

- [captureStackTrace](client.HttpExpectationFailed.md#capturestacktrace)

## Constructors

### constructor

• **new HttpExpectationFailed**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `417`

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
