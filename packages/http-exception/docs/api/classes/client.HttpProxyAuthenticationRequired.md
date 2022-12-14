[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpProxyAuthenticationRequired

# Class: HttpProxyAuthenticationRequired

[client](../modules/client.md).HttpProxyAuthenticationRequired

407 Proxy authentication required (client)

This is similar to 401 Unauthorized but authentication is needed to be done by a proxy

**`See`**

 - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 - https://httpstatus.in/407/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpProxyAuthenticationRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpProxyAuthenticationRequired.md#constructor)

### Properties

- [cause](client.HttpProxyAuthenticationRequired.md#cause)
- [code](client.HttpProxyAuthenticationRequired.md#code)
- [errorId](client.HttpProxyAuthenticationRequired.md#errorid)
- [message](client.HttpProxyAuthenticationRequired.md#message)
- [method](client.HttpProxyAuthenticationRequired.md#method)
- [name](client.HttpProxyAuthenticationRequired.md#name)
- [stack](client.HttpProxyAuthenticationRequired.md#stack)
- [statusCode](client.HttpProxyAuthenticationRequired.md#statuscode)
- [url](client.HttpProxyAuthenticationRequired.md#url)
- [STATUS](client.HttpProxyAuthenticationRequired.md#status)
- [prepareStackTrace](client.HttpProxyAuthenticationRequired.md#preparestacktrace)
- [stackTraceLimit](client.HttpProxyAuthenticationRequired.md#stacktracelimit)

### Methods

- [captureStackTrace](client.HttpProxyAuthenticationRequired.md#capturestacktrace)

## Constructors

### constructor

• **new HttpProxyAuthenticationRequired**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: ``407``

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
