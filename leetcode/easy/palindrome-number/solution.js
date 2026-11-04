/**
 * Returns true if the integer `x` reads the same forward and backward.
 * Negative numbers are never palindromes — the minus sign breaks symmetry.
 *
 * @param {number} x - integer in [-2^31, 2^31 - 1]
 * @returns {boolean}
 */
const isPalindrome = (x) =>
  x.toString() === x.toString().split('').reverse().join('');
