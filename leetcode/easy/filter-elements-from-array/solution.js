/**
 * Filters an array based on a provided callback function.
 *
 * @param {number[]} arr - The array of numbers to filter.
 * @param {function(number, number): boolean} fn - The callback function.
 *        Accepts the element and its index, returns a truthy/falsy value.
 * @returns {number[]} A new array containing only the elements that passed the test.
 */
const filter = (arr, fn) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};
