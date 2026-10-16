/**
 * @param {Function} fn
 * @param {any[]} args
 * @param {number} t - delay in milliseconds
 * @returns {() => void}
 */
const cancellable = function (fn, args, t) {
  let timerId = setTimeout(() => {
    fn(...args);
  }, t);

  return function () {
    clearTimeout(timerId);
  };
};
