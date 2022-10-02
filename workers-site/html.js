/**
 * pretend we're lit-html for devtooling
 */
export const html = (strings, ...args) => {
  return strings.reduce((concatted, curr, idx) => {
    const interp = args[idx] == null ? '' : args[idx];
    return concatted + curr + interp;
  }, '');
}