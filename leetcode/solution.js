/**
 * Returns the length of the last word in `s`, ignoring leading and
 * trailing spaces.
 *
 * @param {string} s - words separated by spaces; at least one word
 * @returns {number}
 */
const lengthOfLastWord = (s) => {
  const words = s.trim().split(/\s+/);
  return words.at(-1).length;
};
