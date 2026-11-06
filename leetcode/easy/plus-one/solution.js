/**
 * Increments a non-negative integer represented as an array of digits
 * by one, and returns the resulting array of digits.
 *
 * @param {number[]} digits - most-significant digit first, no leading zeros
 * @returns {number[]} digits of `digits + 1` (may be one element longer)
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
