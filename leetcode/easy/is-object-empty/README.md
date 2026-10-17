# Is Object Empty (LeetCode 2727)

[Problem link](https://leetcode.com/problems/is-object-empty)

## Problem

Given an object or array (output of `JSON.parse`), return whether it is empty.

## Notes

- `Object.keys(obj).length === 0` works for both objects and arrays.
  For arrays, the keys are the index strings, so `[]` yields length 0 and
  `[1, 2]` yields length 2.
- Returned the boolean expression directly instead of wrapping it in an
  `if` — `=== 0` already produces `true`/`false`.
- Assumed the input is never `null`/`undefined` because the problem
  guarantees it's the output of `JSON.parse`. No null guard needed.
- One `Object.keys` call rather than two: the earlier draft checked
  `!== 0` and `=== 0` separately, iterating the object twice.

## Example

```js
isEmpty({}); // true
isEmpty({ a: 1 }); // false
isEmpty([]); // true
isEmpty([1, 2]); // false
```
