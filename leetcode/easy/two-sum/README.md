# Two Sum (LeetCode 1)

[Problem link](https://leetcode.com/problems/two-sum)

## Problem

Given `nums` and `target`, return the indices of the two numbers that add
up to `target`. Exactly one solution is guaranteed.

## Notes

- Instead of two nested loops (O(n²)), store each number in a `Map`
  (number → index) as I go. For each `nums[i]`, the number I need is
  `target - nums[i]` — if it's already in the map, I'm done. O(n) time.
- Key is the number, value is the index, because the problem asks for
  indices back.
- Check `seen.has(needed)` **before** `seen.set(current, i)`. If I stored
  first, an element could match itself — `[3, 3], target 6` would return
  `[0, 0]` instead of `[0, 1]`.
- `return []` after the loop never runs on valid inputs, but keeps the
  return type consistent.

## Example

```js
twoSum([2, 7, 11, 15], 9); // [0, 1]
twoSum([3, 3], 6); // [0, 1]
```
