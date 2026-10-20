# To Lower Case (LeetCode 709)

[Problem link](https://leetcode.com/problems/to-lower-case)

## Problem

Given a string `s`, return it in lowercase.

## Notes

- `String.prototype.toLowerCase` handles the whole thing — no loop,
  no character-by-character conversion needed.
- LeetCode's follow-up asks you to do it without `toLowerCase`. The
  manual way is `charCodeAt`/`fromCharCode` on each character, shifting
  uppercase A–Z (65–90) by +32. Not needed for the accepted solution,
  but worth knowing the ASCII offset.
