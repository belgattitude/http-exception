[@belgattitude/http-exception](../README.md) / types

# Module: types

## Table of contents

### Type Aliases

- [AssignedStatusCodes](types.md#assignedstatuscodes)
- [HttpExceptionParams](types.md#httpexceptionparams)
- [HttpExceptionParamsWithStatus](types.md#httpexceptionparamswithstatus)
- [HttpStatusCode](types.md#httpstatuscode)

## Type Aliases

### AssignedStatusCodes

Ƭ **AssignedStatusCodes**: keyof typeof `statusMap`

---

### HttpExceptionParams

Ƭ **HttpExceptionParams**: `Object`

#### Type declaration

| Name       | Type     | Description                                                                                                                                                                                                                                                            |
| :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cause?`   | `Error`  | Indicates the original cause of the HttpException. Will be ignored/discarded if the runtime (browser / node version) does not support it or there's no polyfill **`See`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause |
| `message?` | `string` | Exception message, if not provided the default is the exception name in natural language (ie: "HttpNotFound" -> "Not found")                                                                                                                                           |
| `url?`     | `string` | Indicates the original url that caused the error.                                                                                                                                                                                                                      |

---

### HttpExceptionParamsWithStatus

Ƭ **HttpExceptionParamsWithStatus**: [`HttpExceptionParams`](types.md#httpexceptionparams) & { `statusCode`: [`HttpStatusCode`](types.md#httpstatuscode) }

---

### HttpStatusCode

Ƭ **HttpStatusCode**: `number`
