[@belgattitude/http-exception](../README.md) / serializer

# Module: serializer

## Table of contents

### Classes

- [SerializerError](../classes/serializer.SerializerError.md)

### Type Aliases

- [NativeError](serializer.md#nativeerror)
- [SerializableError](serializer.md#serializableerror)
- [SerializableHttpException](serializer.md#serializablehttpexception)
- [SerializableNonNativeError](serializer.md#serializablenonnativeerror)

### Functions

- [convertToSerializable](serializer.md#converttoserializable)
- [createFromSerializable](serializer.md#createfromserializable)
- [fromJson](serializer.md#fromjson)
- [toJson](serializer.md#tojson)

## Type Aliases

### NativeError

Ƭ **NativeError**: `Error` \| `EvalError` \| `RangeError` \| `ReferenceError` \| `SyntaxError` \| `TypeError` \| `URIError`

___

### SerializableError

Ƭ **SerializableError**: `DiscriminateSerializable`<``"NativeError"``\>

___

### SerializableHttpException

Ƭ **SerializableHttpException**: `DiscriminateSerializable`<``"HttpException"``\>

___

### SerializableNonNativeError

Ƭ **SerializableNonNativeError**: `DiscriminateSerializable`<``"NonNativeError"``\>

## Functions

### convertToSerializable

▸ **convertToSerializable**(`e`): `Serializable`

Convert an Error, NativeError or any HttpException to
an object suitable for serialization (a serializable version).

**`Link`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`HttpException`](../classes/base.HttpException.md) \| [`NativeError`](serializer.md#nativeerror) |

#### Returns

`Serializable`

___

### createFromSerializable

▸ **createFromSerializable**(`payload`): [`HttpException`](../classes/base.HttpException.md) \| [`NativeError`](serializer.md#nativeerror)

create an Error, NativeError or any HttpException from a
serializable representation

**`Link`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Serializable` |

#### Returns

[`HttpException`](../classes/base.HttpException.md) \| [`NativeError`](serializer.md#nativeerror)

___

### fromJson

▸ **fromJson**(`json`): `Error` \| [`HttpException`](../classes/base.HttpException.md) \| [`SerializerError`](../classes/serializer.SerializerError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Error` \| [`HttpException`](../classes/base.HttpException.md) \| [`SerializerError`](../classes/serializer.SerializerError.md)

___

### toJson

▸ **toJson**(`exception`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exception` | [`HttpException`](../classes/base.HttpException.md) \| [`NativeError`](serializer.md#nativeerror) |

#### Returns

`string`
