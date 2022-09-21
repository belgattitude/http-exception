[@belgattitude/http-exception](../README.md) / serializer

# Module: serializer

## Table of contents

### Classes

- [SerializerError](../classes/serializer.SerializerError.md)

### Type Aliases

- [NativeError](serializer.md#nativeerror)

### Functions

- [fromJson](serializer.md#fromjson)
- [toJson](serializer.md#tojson)

## Type Aliases

### NativeError

Ƭ **NativeError**: `Error` \| `EvalError` \| `RangeError` \| `ReferenceError` \| `SyntaxError` \| `TypeError` \| `URIError`

Supported native ecmascript errors

**`See`**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types
- https://262.ecma-international.org/12.0/#sec-well-known-intrinsic-objects

## Functions

### fromJson

▸ **fromJson**(`json`): `Error` \| [`HttpException`](../classes/base.HttpException.md) \| [`SerializerError`](../classes/serializer.SerializerError.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

`Error` \| [`HttpException`](../classes/base.HttpException.md) \| [`SerializerError`](../classes/serializer.SerializerError.md)

---

### toJson

▸ **toJson**(`exception`): `string`

#### Parameters

| Name        | Type                                                                                              |
| :---------- | :------------------------------------------------------------------------------------------------ |
| `exception` | [`HttpException`](../classes/base.HttpException.md) \| [`NativeError`](serializer.md#nativeerror) |

#### Returns

`string`
