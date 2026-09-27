# Return Length of Arguments Passed (LeetCode 2703)

[Problem link](https://leetcode.com/problems/return-length-of-arguments-passed)

## Problem

Write a function `argumentsLength` that returns the number of arguments
passed to it.

## Notes

- Used a **rest parameter** `(...args)` instead of the legacy `arguments`
  object. Rest parameters are a real array (so `.length` just works), work
  in arrow functions, and are the modern replacement for `arguments`.
- `arguments` is still available inside non-arrow functions, but it's an
  array-like object rather than a real array — a common source of bugs.
  Prefer rest parameters in new code.
- JSDoc's `{...any}` uses the `...` prefix to mark `args` as a rest
  parameter, matching the code.

## Example

```js
argumentsLength(5); // 1
argumentsLength(1, 2, 3); // 3
argumentsLength({}, null, 42); // 3
```
