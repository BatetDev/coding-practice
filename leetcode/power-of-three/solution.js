/**
 * Returns true if `n` is a power of three (n = 3^x for some integer x ≥ 0).
 *
 * @param {number} n
 * @returns {boolean}
 */
const isPowerOfThree = (n) => {
  if (n <= 0) return false;
  while (n % 3 === 0) n /= 3;
  return n === 1;
};
