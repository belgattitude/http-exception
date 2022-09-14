import { HttpBadGateway } from '../../server';
import type { SerializedHttpException } from '../serializeHttpException';
import { serializeHttpException } from '../serializeHttpException';

describe('serializeHttpException tests', () => {
  it('should give the expected payload', () => {
    const error = new HttpBadGateway({
      message: 'Bad Gateway',
      url: 'http://localhost:3000',
    });
    const serialized = serializeHttpException(error);
    expect(serialized).toStrictEqual<SerializedHttpException>({
      __type: 'HttpBadGateway',
      __version: 1,
      message: 'Bad Gateway',
      statusCode: 502,
      url: 'http://localhost:3000',
      // eslint-disable-next-line jest/no-conditional-in-test
      stack: error.stack ?? null,
      cause: null,
    });
  });
});
