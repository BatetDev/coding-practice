/**
 * @param {number[]} nums
 * @param {(accumulator: number, current: number) => number} fn
 * @param {number} init - initial accumulator value
 * @returns {number} the final accumulated value
 */
const reduce = (nums, fn, init) => {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
};
