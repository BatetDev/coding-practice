/**
 * Returns a new array with each element transformed by `fn`.
 *
 * @param {number[]} arr - the array to transform
 * @param {(element: number, index: number) => number} fn - transform
 *   applied to each element; receives the element and its index
 * @returns {number[]} a new array of the same length
 */
const map = (arr, fn) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};
