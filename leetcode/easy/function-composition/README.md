# Function Composition (LeetCode 2629)

[Problem link](https://leetcode.com/problems/function-composition)

## Problem

Given an array of functions `[f1, f2, ..., fn]`, return a new function that
applies them right-to-left to its input. `compose([f, g, h])(x)` is
equivalent to `f(g(h(x)))`.

## Notes

- Iterated the array **backwards** (`i = length - 1; i >= 0; i--`) because
  composition applies the rightmost function first. The result of each call
  becomes the input to the next one.
- Kept an explicit `for` loop rather than `reduceRight` — other problems in
  the 30 Days of JavaScript series forbid using the built-in equivalent, and
  it also makes the right-to-left mechanics visible.
- `let result = x` (not `const`) — the accumulator is reassigned every
  iteration.
- Handles the empty array case naturally: the loop never runs, so `result`
  stays `x` and the identity function is returned.
- JSDoc uses `Array<(x: number) => number>` to describe an array of unary
  functions, which is more informative than the starter's `Function[]`.

## Example

```js
const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9  →  2 * 4 = 8, then 8 + 1 = 9
```
