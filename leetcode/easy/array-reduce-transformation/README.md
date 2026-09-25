# Array Reduce Transformation (LeetCode 2626)

[Problem link](https://leetcode.com/problems/array-reduce-transformation)

## Problem

Implement a `reduce` function that works like `Array.prototype.reduce`:
it takes an array `nums`, a reducer function `fn`, and an initial value
`init`, and returns the final accumulated result. Do not use the built-in
`reduce`.

## Notes

- `let result = init` instead of `const` — the accumulator is reassigned
  on every iteration.
- The reducer is called as `fn(result, nums[i])`, matching the native
  `reduce` order: `(accumulator, currentValue)`. Argument order matters
  and hidden tests check it.
- If `nums` is empty, the loop never runs and `init` is returned — the
  same behaviour as the native `reduce` when an initial value is supplied.
- JSDoc spells out the callback signature
  `(accumulator: number, current: number) => number` so the editor flags
  a wrong argument order at the call site.

## Example

```js
reduce([1, 2, 3], (acc, n) => acc + n, 0); // 6
reduce([1, 2, 3], (acc, n) => acc + n, 10); // 16
```
