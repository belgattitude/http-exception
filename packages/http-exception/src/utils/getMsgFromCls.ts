/**
 * Return default message based on http exception className
 * @internal
 */
export const getMsgFromCls = (className: string) => {
  return className
    .replace(/[A-Z]/g, (match) => ` ${match}`)
    .trim()
    .split(' ')
    .slice(1)
    .map((word, idx) => (idx === 0 ? word : word.toLowerCase()))
    .join(' ');
};
