# Reverse String (LeetCode 344)

[Problem link](https://leetcode.com/problems/reverse-string)

## Problem

Reverse an array of characters in place with O(1) extra memory.

## Notes

- `s.reverse()` mutates the array in place and uses constant extra space,
  so it satisfies both requirements.
- Called it in a block body with no `return` — the problem's contract is
  `@returns {void}`, and `s.reverse()` returns the array, so returning it
  would technically violate "do not return anything."

## Example

```js
const s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
// s is now ["o", "l", "l", "e", "h"]
```
