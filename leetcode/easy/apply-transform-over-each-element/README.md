# Apply Transform Over Each Element in Array (LeetCode 2635)

[Problem link](https://leetcode.com/problems/apply-transform-over-each-element-in-array)

## Problem

Implement a `map` function that returns a new array where each element is
the result of calling `fn` on the original element. Do not use the built-in
`Array.prototype.map`.

## Notes

- Used a classic `for` loop instead of `forEach` so the index is explicit
  and easy to pass to `fn` — matching the real `map` contract.
- `fn` is called with **two** arguments: `fn(arr[i], i)`. The native `map`
  also passes the index (and the whole array), so callbacks that rely on
  position work correctly.
- `const result = []` — the array reference never changes, only its contents.
- JSDoc documents the callback signature as
  `(element: number, index: number) => number` so the editor flags a missing
  argument at the call site.

## Example

```js
map([1, 2, 3], (n) => n + 1); // [2, 3, 4]
map([1, 2, 3], (n, i) => n + i); // [1, 3, 5]
```
