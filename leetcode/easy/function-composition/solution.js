/**
 * Composes an array of unary functions into a single function.
 * The rightmost function is applied first, matching
 * `Array.prototype.reduceRight` semantics.
 *
 * @param {Array<(x: number) => number>} functions - functions to compose,
 *   applied right-to-left
 * @returns {(x: number) => number} a function that pipes its input through
 *   every function in `functions`
 */
const compose = (functions) => {
  return (x) => {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};
