import { HttpException } from '../../../base';
import { HttpBadRequest } from '../../../client';
import type { SerializableHttpException } from '../../types';
import { convertToSerializable } from '../convertToSerializable';

describe('convertToSerializable', () => {
  describe('when an http exception is given', () => {
    const httpExceptions: [label: string, error: HttpException][] = [
      ['simple', new HttpException(500)],
      ['withMsg', new HttpException(500, 'msg')],
      [
        'withCause',
        new HttpException(500, {
          cause: new HttpException(500, 'msg'),
        }),
      ],
      [
        'HttpBadRequest',
        new HttpBadRequest({
          message: 'msg',
          cause: new EvalError(),
          url: 'http://',
        }),
      ],
    ];

    it.each(httpExceptions)('works with %s', (label, err) => {
      const serializable = convertToSerializable(
        err
      ) as SerializableHttpException;
      expect(serializable.__type).toStrictEqual('HttpException');
      expect(serializable.message).toStrictEqual(err.message);
      expect(serializable.name).toStrictEqual(err.name);
      expect(serializable?.url).toStrictEqual(err?.url);
      const { cause, stack, ...serializableWithoutCause } = serializable;
      expect(serializableWithoutCause).toMatchSnapshot();
    });
  });

  describe('when native error is given', () => {
    const natives: [label: string, err: Error][] = [
      ['ErrorSimple', new Error()],
      ['ErrorSimpleRange', new RangeError()],
      ['ErrorSimpleEval', new EvalError()],
      ['ErrorMsg', new Error('msg')],
      [
        'ErrorMsg',
        new Error('msg', {
          cause: new Error('msg'),
        }),
      ],
    ];
    it.each(natives)('works with %s', (label, err) => {
      const serializable = convertToSerializable(err);
      expect(serializable.__type).toStrictEqual('NativeError');
      expect(serializable.message).toStrictEqual(err.message);
      expect(serializable.name).toStrictEqual(err.name);
      const { cause, stack, ...serializableWithoutCause } = serializable;
      expect(serializableWithoutCause).toMatchSnapshot();
    });
  });

  describe('when non native error is given', () => {
    class NonNativeError extends Error {
      constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, NonNativeError.prototype);
        this.name = 'NonNativeError';
      }
    }
    it('set the type to NonNativeError', () => {
      const e = new NonNativeError('msg');
      const serializable = convertToSerializable(e);
      expect(e.name).toStrictEqual('NonNativeError');
      expect(serializable.__type).toStrictEqual('NonNativeError');
      const { cause, stack, ...serializableWithoutCause } = serializable;
      expect(serializableWithoutCause).toMatchSnapshot();
    });
  });

  describe('when a non error is given', () => {
    it('switch to build-in Error with custom message', () => {
      const e = new Date() as unknown as Error;
      const serializable = convertToSerializable(e);
      expect(serializable.__type).toStrictEqual('NonNativeError');
      const { cause, stack, ...serializableWithoutCause } = serializable;
      expect(serializableWithoutCause).toMatchSnapshot();
    });
  });
});
