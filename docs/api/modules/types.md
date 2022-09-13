[@belgattitude/http-exception - v0.1.10-canary.0](../README.md) / types

# Module: types

## Table of contents

### Type Aliases

- [HttpExceptionParams](types.md#httpexceptionparams)
- [HttpExceptionParamsWithStatus](types.md#httpexceptionparamswithstatus)
- [HttpStatusCode](types.md#httpstatuscode)

## Type Aliases

### HttpExceptionParams

Ƭ **HttpExceptionParams**: `Object`

#### Type declaration

| Name       | Type     | Description                                                                                                                                              |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cause?`   | `Error`  | Indicates the original cause of the HttpException **`See`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause |
| `message?` | `string` | Exception message, if not provided the default is the exception name in natural language (ie: "HttpNotFound" -> "Not found")                             |
| `url?`     | `string` | Indicates the original url that caused the error.                                                                                                        |

---

### HttpExceptionParamsWithStatus

Ƭ **HttpExceptionParamsWithStatus**: [`HttpExceptionParams`](types.md#httpexceptionparams) & { `statusCode`: [`HttpStatusCode`](types.md#httpstatuscode) }

---

### HttpStatusCode

Ƭ **HttpStatusCode**: `number`
