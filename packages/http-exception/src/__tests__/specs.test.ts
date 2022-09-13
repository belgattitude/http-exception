import { HttpClientException, HttpException } from '../base';
import { HttpNotFound } from '../client';

describe('Common specs', () => {
  describe('Inheritance', () => {
    it('should properly inform Object.prototype.name', () => {
      const err = new HttpNotFound();
      expect(err.name).toStrictEqual('HttpNotFound');
    });
    it('should properly get the default message', () => {
      const err = new HttpNotFound();
      expect(err.message).toStrictEqual('Not found');
    });
    it('should be properly respect inheritance', () => {
      const err = new HttpNotFound();
      expect(err.name).toStrictEqual('HttpNotFound');
      expect(err).toBeInstanceOf(HttpNotFound);
      expect(err).toBeInstanceOf(HttpException);
      expect(err).toBeInstanceOf(HttpClientException);
    });
  });
});
