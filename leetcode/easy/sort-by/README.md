# Sort By (LeetCode 2724)

[Problem link](https://leetcode.com/problems/sort-by)

## Problem

Given an array and a function `fn` returning numbers, return the array
sorted in ascending order by each element's `fn` value.

## Notes

- `sort`/`toSorted` take a **comparator** `(a, b) => number`: negative
  means `a` first, positive means `b` first. The comparator here compares
  the _keys_ (`fn(a) - fn(b)`), not the elements themselves.
- Used `toSorted` (ES2023) instead of `sort`: `sort` mutates in place,
  `toSorted` returns a new array and leaves the input untouched. Safer by
  default — no hidden side effect on the caller's array.
- `fn` is called ~2·n·log(n) times, once per comparison. Fine for the
  test sizes; for an expensive `fn`, compute keys once first
  (decorate-sort-undecorate).
- JSDoc documents `fn` as `(element: any) => number` to make clear it's a
  key extractor, not a comparator.

## Example

```js
sortBy([{ x: 3 }, { x: 1 }, { x: 2 }], (o) => o.x);
// [{ x: 1 }, { x: 2 }, { x: 3 }]
```
