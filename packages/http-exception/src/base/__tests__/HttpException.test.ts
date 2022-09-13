import { HttpException } from '../HttpException';

describe('HttpException', () => {
  it('should be instance of Error', () => {
    const exception = new HttpException(500);
    expect(exception).toBeInstanceOf(HttpException);
  });
  it('should default message to "Http exception"', () => {
    const exception = new HttpException(500);
    expect(exception.message).toStrictEqual('Http exception');
  });
  it('should have native error properties', () => {
    const exception = new HttpException(500, { message: 'test' });
    expect(exception.name).toStrictEqual('HttpException');
    expect(exception.message).toStrictEqual('test');
    expect(exception.stack).toStrictEqual(expect.any(String));
    expect(exception.cause).toBeUndefined();
  });
  it('should persist url and statusCode', () => {
    const exception = new HttpException(500, {
      message: 'test',
      url: 'https://localhost',
    });
    expect(exception.url).toStrictEqual('https://localhost');
    expect(exception.statusCode).toStrictEqual(500);
  });
  it('should support sending a cause', () => {
    let exception: HttpException;
    const errorCause = new Error('Origin error');
    try {
      throw errorCause;
    } catch (cause) {
      exception = new HttpException(500, {
        cause: cause as unknown as Error,
      });
    }
    expect(exception.cause).toStrictEqual(errorCause);
    expect((exception.cause as unknown as Error).message).toStrictEqual(
      'Origin error'
    );
  });
});
