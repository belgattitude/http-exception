import { serializeCause } from './serializeCause';
import type { NativeError } from './typeguard/isNativeError';
import type { SerializableError } from './types';

export const serializeNativeError = (
  nativeError: NativeError
): SerializableError => {
  const { name, message = null, stack = null, cause = null } = nativeError;
  return {
    __type: name,
    __version: 1,
    name: name,
    message,
    stack,
    cause: cause instanceof Error ? serializeCause(cause) : null,
  };
};
