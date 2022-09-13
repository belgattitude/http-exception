import statuses from 'statuses';
import { HttpClientException, HttpException } from '../base';
import { HttpNotFound } from '../client';
import { createHttpException } from '../factory';
import { statusMap } from '../status';

describe('Common specs', () => {
  describe('All known statuses', () => {
    const all = Object.entries(statusMap).map(([code]) => {
      const exception = createHttpException(Number.parseInt(code, 10));
      return [exception?.name ?? '', Number.parseInt(code, 10), exception];
    }) as [className: string, status: number, exception: HttpException][];

    describe('classname', () => {
      it.each(all)(
        'should match official npm/statuses names',
        (className, status) => {
          const title = statuses(status)
            ?.toString()
            .replace(/[\W_]+/g, '')
            .toLowerCase();
          // eslint-disable-next-line jest/no-conditional-in-test
          const expected = title.startsWith('http') ? title : `http${title}`;
          expect(className.toLowerCase()).toStrictEqual(expected);
        }
      );
    });

    describe('default messages', () => {
      it.each(all)(
        'should match official npm/statuses messages',
        (className, status, exception) => {
          const expected = statuses(status)
            ?.toString()
            .replace(/[\W_]+/g, '')
            .toLowerCase();
          expect(
            exception?.message.toLowerCase().replace(/[\W_]+/g, '')
          ).toStrictEqual(expected);
        }
      );
    });
  });

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
