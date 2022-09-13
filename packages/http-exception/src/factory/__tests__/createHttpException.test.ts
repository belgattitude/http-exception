import type { HttpException } from '../../base';
import { HttpClientException, HttpServerException } from '../../base';
import { statusMap } from '../../status';
import type { HttpExceptionParams } from '../../types';
import { createHttpException } from '../createHttpException';

describe('createHttpException tests', () => {
  describe('when error status has a concrete class', () => {
    type AnyExceptionClass = {
      new <T>(params: HttpExceptionParams | string): T;
    };

    const all = Object.entries(statusMap).map(([code, cls]) => {
      const obj = new cls();
      return [obj.name, Number.parseInt(code, 10), cls];
    }) as [className: string, status: number, cls: AnyExceptionClass][];

    it.each(all)(
      'should return %p from status %p',
      (className, status, cls) => {
        const params = 'msg';
        const error = createHttpException(status, params);
        const expected = new cls(params);
        expect(error).toStrictEqual(expected);
      }
    );

    it.each(all)(
      'should preserver the oject name (%p.name)',
      (className, status, cls) => {
        const params = 'msg';
        const error = createHttpException(status, params);
        const expected = new cls(params) as HttpException;
        expect(error?.name).toStrictEqual(expected.name);
      }
    );
  });

  describe('when server status does not have a concrete class', () => {
    const nonAssignedByIETF = [
      ['Arbitrary number 599', 599],
      ['Cloudflare - 524 - A Timeout Occurred', 524],
      ['Cloudflare - 525 - SSL Handshake Failed', 525],
    ] as [msg: string, status: number][];

    it.each(nonAssignedByIETF)(
      'should return HttpServerException',
      (msg, status) => {
        const error = createHttpException(status, msg);
        expect(error).toStrictEqual(new HttpServerException(status, msg));
        expect(error?.name).toStrictEqual('HttpServerException');
      }
    );
  });

  describe('when client status does not have a concrete class', () => {
    const unlistedClientErrors = [
      ['Arbitrary number 499', 499],
      ['Unassigned 427', 427],
    ] as [msg: string, status: number][];

    it.each(unlistedClientErrors)(
      'should return HttpClientException',
      (msg, status) => {
        const error = createHttpException(status, msg);
        expect(error).toStrictEqual(
          new HttpClientException(status, {
            message: msg,
          })
        );
        expect(error?.name).toStrictEqual('HttpClientException');
      }
    );
  });
});
