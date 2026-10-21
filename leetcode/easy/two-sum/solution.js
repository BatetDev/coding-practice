/**
 * Returns the indices of the two numbers in `nums` that add up to
 * `target`, using a single pass with a hash map.
 *
 * @param {number[]} nums - array of integers
 * @param {number} target - the sum to find
 * @returns {number[]} indices `[i, j]` such that `nums[i] + nums[j] === target`
 */
const twoSum = (nums, target) => {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const needed = target - current;

    if (seen.has(needed)) return [seen.get(needed), i];

    seen.set(current, i);
  }

  return [];
};
