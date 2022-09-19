import { HttpBadGateway } from '../../server';
import { serializeHttpException } from '../serializeHttpException';
import type { SerializableHttpException } from '../types';

describe('serializeHttpException tests', () => {
  describe('when all params are defaults', () => {
    it('should encode all default values', () => {
      const error = new HttpBadGateway();
      const value = JSON.parse(serializeHttpException(error));
      expect(value).toStrictEqual<SerializableHttpException>({
        __type: 'HttpBadGateway',
        __version: 1,
        name: error.name,
        message: error.message,
        statusCode: error.statusCode,
        url: null,
        stack: error.stack as unknown as string,
        cause: null,
      });
    });
  });
});
