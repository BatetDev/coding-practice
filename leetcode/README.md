# Length of Last Word (LeetCode 58)

[Problem link](https://leetcode.com/problems/length-of-last-word)

## Problem

Given a string of words separated by spaces, return the length of the
last word. Leading/trailing spaces and multiple spaces between words
are possible.

## Notes

- `s.trim()` removes leading and trailing spaces, so the last element
  after `split` is never an empty string.
- `split(/\s+/)` splits on one-or-more whitespace, so interior double
  spaces don't produce empty strings either. `split(" ")` also works
  here because we only look at the _last_ element — interior empties
  never reach the check — but `/\s+/` is clearer about intent.
- `words.at(-1)` is the ES2022 way to get the last element; equivalent
  to `words[words.length - 1]` without the arithmetic.

## Example

```js
lengthOfLastWord('Hello World'); // 5
lengthOfLastWord('   fly me   to   the moon  '); // 4
lengthOfLastWord('luffy is still joyboy'); // 6
```
