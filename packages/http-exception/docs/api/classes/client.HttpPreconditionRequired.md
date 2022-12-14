[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpPreconditionRequired

# Class: HttpPreconditionRequired

[client](../modules/client.md).HttpPreconditionRequired

428 Precondition Required (client)

The origin server requires the request to be conditional. This response is intended to prevent the
'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the
server, when meanwhile a third party has modified the state on the server, leading to a conflict.

**`See`**

 - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 - https://httpstatus.in/428/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPreconditionRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpPreconditionRequired.md#constructor)

### Properties

- [cause](client.HttpPreconditionRequired.md#cause)
- [code](client.HttpPreconditionRequired.md#code)
- [errorId](client.HttpPreconditionRequired.md#errorid)
- [message](client.HttpPreconditionRequired.md#message)
- [method](client.HttpPreconditionRequired.md#method)
- [name](client.HttpPreconditionRequired.md#name)
- [stack](client.HttpPreconditionRequired.md#stack)
- [statusCode](client.HttpPreconditionRequired.md#statuscode)
- [url](client.HttpPreconditionRequired.md#url)
- [STATUS](client.HttpPreconditionRequired.md#status)
- [prepareStackTrace](client.HttpPreconditionRequired.md#preparestacktrace)
- [stackTraceLimit](client.HttpPreconditionRequired.md#stacktracelimit)

### Methods

- [captureStackTrace](client.HttpPreconditionRequired.md#capturestacktrace)

## Constructors

### constructor

• **new HttpPreconditionRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: ``428``

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
