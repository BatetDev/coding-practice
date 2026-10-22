/**
 * Converts a valid Roman numeral string to its integer value.
 *
 * @param {string} s - a Roman numeral
 * @returns {number} the integer value of `s`
 */
const romanToInt = (s) => {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    const next = values[s[i + 1]] ?? 0;

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
};
