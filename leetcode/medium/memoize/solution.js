/**
 * Returns a memoized version of `fn`. Repeated calls with the same
 * arguments return the cached result instead of re-invoking `fn`.
 * Arguments are keyed by `args.join(",")`, so argument order matters.
 *
 * @param {Function} fn - the function to memoize
 * @returns {Function} a function with the same signature as `fn` that
 *   caches results by argument list
 */
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = args.join(',');
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
