export type SerializableError = {
  __type: string;
  __version: number;
  name: string | null;
  message: string | null;
  stack: string | null;
  cause: SerializableError | null;
};
