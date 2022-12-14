[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpRangeNotSatisfiable

# Class: HttpRangeNotSatisfiable

[client](../modules/client.md).HttpRangeNotSatisfiable

416 Range Not Satisfiable (client)

The range specified by the Range header field in the request cannot be fulfilled.
It's possible that the range is outside the size of the target URI's data.

**`See`**

 - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 - https://httpstatus.in/416/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpRangeNotSatisfiable`**

## Table of contents

### Constructors

- [constructor](client.HttpRangeNotSatisfiable.md#constructor)

### Properties

- [cause](client.HttpRangeNotSatisfiable.md#cause)
- [code](client.HttpRangeNotSatisfiable.md#code)
- [errorId](client.HttpRangeNotSatisfiable.md#errorid)
- [message](client.HttpRangeNotSatisfiable.md#message)
- [method](client.HttpRangeNotSatisfiable.md#method)
- [name](client.HttpRangeNotSatisfiable.md#name)
- [stack](client.HttpRangeNotSatisfiable.md#stack)
- [statusCode](client.HttpRangeNotSatisfiable.md#statuscode)
- [url](client.HttpRangeNotSatisfiable.md#url)
- [STATUS](client.HttpRangeNotSatisfiable.md#status)
- [prepareStackTrace](client.HttpRangeNotSatisfiable.md#preparestacktrace)
- [stackTraceLimit](client.HttpRangeNotSatisfiable.md#stacktracelimit)

### Methods

- [captureStackTrace](client.HttpRangeNotSatisfiable.md#capturestacktrace)

## Constructors

### constructor

• **new HttpRangeNotSatisfiable**(`msgOrParams?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgOrParams?` | `string` \| [`HttpExceptionParams`](../modules/types.md#httpexceptionparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error` \| [`HttpException`](base.HttpException.md)

If set and the runtime (browser or node) supports it
you can get back the error cause

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause

#### Inherited from

[HttpClientException](base.HttpClientException.md).[cause](base.HttpClientException.md#cause)

___

### code

• `Readonly` **code**: `undefined` \| `string`

Custom additional code (ie: 'AbortError', 'CODE-1234'...)

#### Inherited from

[HttpClientException](base.HttpClientException.md).[code](base.HttpClientException.md#code)

___

### errorId

• `Readonly` **errorId**: `undefined` \| `string`

Inform about an unique error identifier (ie: nanoid, cuid...)

#### Inherited from

[HttpClientException](base.HttpClientException.md).[errorId](base.HttpClientException.md#errorid)

___

### message

• **message**: `string`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[message](base.HttpClientException.md#message)

___

### method

• `Readonly` **method**: `undefined` \| [`HttpMethod`](../modules/types.md#httpmethod)

Http method

#### Inherited from

[HttpClientException](base.HttpClientException.md).[method](base.HttpClientException.md#method)

___

### name

• **name**: `string`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[name](base.HttpClientException.md#name)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[stack](base.HttpClientException.md#stack)

___

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code (400-599)

#### Inherited from

[HttpClientException](base.HttpClientException.md).[statusCode](base.HttpClientException.md#statuscode)

___

### url

• `Readonly` **url**: `undefined` \| `string`

Indicates the original url that caused the error.

#### Inherited from

[HttpClientException](base.HttpClientException.md).[url](base.HttpClientException.md#url)

___

### STATUS

▪ `Static` `Readonly` **STATUS**: ``416``

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[prepareStackTrace](base.HttpClientException.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[stackTraceLimit](base.HttpClientException.md#stacktracelimit)

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[HttpClientException](base.HttpClientException.md).[captureStackTrace](base.HttpClientException.md#capturestacktrace)
