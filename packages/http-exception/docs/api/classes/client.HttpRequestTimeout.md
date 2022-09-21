[@belgattitude/http-exception](../README.md) / [client](../modules/client.md) / HttpRequestTimeout

# Class: HttpRequestTimeout

[client](../modules/client.md).HttpRequestTimeout

408 Request timeout (client)

This response is sent on an idle connection by some servers, even without any previous request by the client.
It means that the server would like to shut down this unused connection. This response is used much more
since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing.
Also note that some servers merely shut down the connection without sending this message.

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
- https://httpstatus.in/408/

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpRequestTimeout`**

## Table of contents

### Constructors

- [constructor](client.HttpRequestTimeout.md#constructor)

### Properties

- [cause](client.HttpRequestTimeout.md#cause)
- [statusCode](client.HttpRequestTimeout.md#statuscode)
- [url](client.HttpRequestTimeout.md#url)
- [STATUS](client.HttpRequestTimeout.md#status)

## Constructors

### constructor

• **new HttpRequestTimeout**(`msgOrParams?`)

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

▪ `Static` `Readonly` **STATUS**: `408`
