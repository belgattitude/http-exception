export const supportsErrorCause = () => {
  const cause = Symbol('');
  return new Error('test', { cause }).cause === cause;
};
