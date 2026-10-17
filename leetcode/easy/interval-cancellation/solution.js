/**
 * Calls `fn(...args)` immediately, then every `t` ms until the returned
 * cancel function is invoked.
 *
 * @param {Function} fn - the function to invoke
 * @param {Array} args - arguments to pass to `fn`
 * @param {number} t - interval in milliseconds
 * @returns {() => void} a cancel function that stops the interval
 */
const cancellable = (fn, args, t) => {
  fn(...args);

  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return () => {
    clearInterval(intervalId);
  };
};
