/**
 * Returns the longest common prefix among all strings in `strs`,
 * or `""` if there is none.
 *
 * @param {string[]} strs - at least one non-empty string
 * @returns {string}
 */
const longestCommonPrefix = (strs) => {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (prefix.length === 0) return '';
  }

  return prefix;
};
