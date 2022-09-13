import type { HttpException } from '../../base';
import { HttpBadGateway } from '../../server';
import {
  SerializedHttpException,
  serializeHttpException,
} from '../serializeHttpException';
import { unserializeHttpException } from '../unserializeHttpException';

describe('unserializeHttpException tests', () => {
  it('should give the expected payload', () => {
    const errorCause = new Error('cool');
    let error: HttpException | null = null;
    try {
      throw new HttpBadGateway({
        message: 'Bad Gateway',
        url: 'http://localhost:3000',
        cause: errorCause,
      });
    } catch (e) {
      error = e as unknown as HttpException;
    }
    const serialized = JSON.stringify(serializeHttpException(error));
    const unserialized = unserializeHttpException(serialized);
    expect(unserialized).toStrictEqual(error);
    expect(unserialized).toBeInstanceOf(HttpBadGateway);
    expect(unserialized?.cause).toStrictEqual(errorCause);
  });
});
