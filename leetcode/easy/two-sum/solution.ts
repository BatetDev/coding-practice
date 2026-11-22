/**
 * Returns the indices of the two numbers in `nums` that add up to
 * `target`, using a single pass with a hash map.
 *
 * @param nums - array of integers
 * @param target - the sum to find
 * @returns indices `[i, j]` such that `nums[i] + nums[j] === target`
 */
const twoSum = (nums: number[], target: number): number[] => {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const needed = target - current;

    const seenIndex = seen.get(needed);
    if (seenIndex !== undefined) return [seenIndex, i];

    seen.set(current, i);
  }

  return [];
};
