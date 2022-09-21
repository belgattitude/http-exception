[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpPaymentRequired

# Class: HttpPaymentRequired

[client](../modules/client.md).HttpPaymentRequired

402 Payment required (client)

This response code is reserved for future use. The initial aim for creating this code was using it for digital
payment systems, however this status code is used very rarely and no standard convention exists.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
- https://httpstatus.in/402/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPaymentRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpPaymentRequired.md#constructor)

### Properties

- [cause](client.HttpPaymentRequired.md#cause)
- [message](client.HttpPaymentRequired.md#message)
- [name](client.HttpPaymentRequired.md#name)
- [stack](client.HttpPaymentRequired.md#stack)
- [statusCode](client.HttpPaymentRequired.md#statuscode)
- [url](client.HttpPaymentRequired.md#url)
- [STATUS](client.HttpPaymentRequired.md#status)
- [prepareStackTrace](client.HttpPaymentRequired.md#preparestacktrace)
- [stackTraceLimit](client.HttpPaymentRequired.md#stacktracelimit)

### Methods

- [captureStackTrace](client.HttpPaymentRequired.md#capturestacktrace)

## Constructors

### constructor

• **new HttpPaymentRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `402`

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
