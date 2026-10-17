/**
 * Returns true if the object or array has no entries.
 *
 * @param {Object | Array} obj - output of `JSON.parse`, so never null
 * @returns {boolean}
 */
const isEmpty = (obj) => Object.keys(obj).length === 0;
