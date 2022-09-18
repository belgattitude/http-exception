import type { SerializableError } from './SerializableError';
import type { SerializableHttpException } from './SerializableHttpException';

export type SerializableCause = SerializableError | SerializableHttpException;
