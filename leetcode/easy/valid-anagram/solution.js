/**
 * Returns true if `t` is an anagram of `s` — same characters with the
 * same counts, in any order.
 *
 * @param {string} s - lowercase English letters
 * @param {string} t - lowercase English letters
 * @returns {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
};
