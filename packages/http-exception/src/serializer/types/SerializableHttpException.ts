import type { SerializableError } from './SerializableError';

export type SerializableHttpException = SerializableError & {
  statusCode: number;
  url: string | null;
};
