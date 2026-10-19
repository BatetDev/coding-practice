/**
 * Returns a new array sorted in ascending order by the numeric value
 * of `fn(element)`. Does not mutate `arr`.
 *
 * @param {any[]} arr - the array to sort (left unchanged)
 * @param {(element: any) => number} fn - maps each element to its sort key
 * @returns {any[]} a new sorted array
 */
const sortBy = (arr, fn) => arr.toSorted((a, b) => fn(a) - fn(b));
