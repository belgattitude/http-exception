import type { HttpException } from '../../base';
import { HttpBadGateway } from '../../server';
import { serializeHttpException } from '../serializeHttpException';
import { unserializeHttpException } from '../unserializeHttpException';

describe('unserializeHttpException tests', () => {
  it('should give the expected payload', () => {
    let throwed: HttpException | null;
    const nonThrowed = new HttpBadGateway('Bad gateway (nonThrowed)');
    try {
      throw new HttpBadGateway({
        message: 'Bad gateway (throwed)',
        url: 'http://localhost:3000',
      });
    } catch (e) {
      throwed = e as unknown as HttpException;
    }
    const serialized = serializeHttpException(throwed);
    const unserialized = unserializeHttpException(serialized);
    expect(unserialized).toStrictEqual(throwed);
    expect(unserialized).not.equal(nonThrowed.message);
  });
});
