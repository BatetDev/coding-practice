/**
 * Returns true if `s` reads the same forward and backward after
 * lowercasing and removing all non-alphanumeric characters.
 *
 * @param {string} s - printable ASCII string
 * @returns {boolean}
 */
const isPalindrome = (s) => {
  const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
};
