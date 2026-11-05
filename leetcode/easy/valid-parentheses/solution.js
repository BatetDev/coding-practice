/**
 * Returns true if every opening bracket in `s` is closed by the matching
 * type, in the correct order.
 *
 * @param {string} s - string containing only ( ) { } [ ]
 * @returns {boolean}
 */
const isValid = (s) => {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if (char in pairs) {
      if (stack.length === 0) return false;
      if (stack.pop() !== pairs[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
