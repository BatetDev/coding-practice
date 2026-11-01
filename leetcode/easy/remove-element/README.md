# Remove Element (LeetCode 27)

[Problem link](https://leetcode.com/problems/remove-element)

## Problem

Remove every occurrence of `val` from `nums` in place. Return `k`, the
count of remaining elements; LeetCode checks that `nums[0..k-1]` holds
the expected values (order preserved, trailing slots ignored).

## Notes

- Two-pointer pattern: `j` scans every element, `k` marks where the next
  kept value goes. `j` advances every iteration; `k` only advances when
  `nums[j] !== val`.
- `k` and `j` start together but diverge as soon as a `val` is skipped.
  `k` trails behind, pointing at the stale slot the next kept value will
  overwrite — that's the "modify in place" part.
- No `splice`. Removing with `splice` shifts every subsequent element,
  O(n) per removal → O(n²) worst case. Two-pointer is O(n) time, O(1)
  space, because it overwrites instead of shifting.
- Returned `k`, not `nums`. An earlier draft returned the array; LeetCode
  coerces it to a number (`Number([]) === 0`) and slices `nums[0..0]`,
  which yields `[]`.
- Stale values past index `k-1` are left in `nums` on purpose. The
  problem only reads the first `k` elements.

## Example

```js
const nums = [3, 2, 2, 3];
removeElement(nums, 3); // returns 2
// nums is [2, 2, 2, 3] — first 2 elements are [2, 2]
```
