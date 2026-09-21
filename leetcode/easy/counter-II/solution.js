/**
 * Creates a counter with `increment`, `decrement`, and `reset` methods.
 * The counter starts at `init` and keeps its state in a closure.
 *
 * @param {number} init - the initial value of the counter
 * @returns {{
 *   increment: () => number,
 *   decrement: () => number,
 *   reset: () => number
 * }}
 */
const createCounter = (init) => {
  let count = init;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => {
      count = init;
      return count;
    },
  };
};
