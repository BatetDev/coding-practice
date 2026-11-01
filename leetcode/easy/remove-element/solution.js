/**
 * Removes all occurrences of `val` from `nums` in place and returns the
 * number of remaining elements. The first `k` elements of `nums` hold
 * the kept values; the rest is unspecified.
 *
 * @param {number[]} nums - array to modify in place
 * @param {number} val - value to remove
 * @returns {number} `k`, the count of elements not equal to `val`
 */
const removeElement = (nums, val) => {
  let k = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[k] = nums[j];
      k++;
    }
  }
  return k;
};
