import { getMsgFromCls } from '../getMsgFromCls';

describe('getMsgFromCls', () => {
  it('should return the exception classname in natural language', () => {
    expect(getMsgFromCls('HttpImATeapot')).toStrictEqual('Im a teapot');
  });
});
