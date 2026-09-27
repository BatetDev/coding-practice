/**
 * Wraps `fn` so it can only be invoked once. The first call returns
 * `fn`'s result; every subsequent call returns `undefined`.
 *
 * @param {Function} fn - the function to wrap
 * @returns {(...args: any[]) => any | undefined} a function that runs
 *   `fn` at most once
 */
const once = (fn) => {
  let called = false;
  return (...args) => {
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
};
