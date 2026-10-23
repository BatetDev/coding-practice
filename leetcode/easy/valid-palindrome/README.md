# Valid Palindrome (LeetCode 125)

[Problem link](https://leetcode.com/problems/valid-palindrome)

## Problem

Return true if `s` reads the same forward and backward after lowercasing
and removing all non-alphanumeric characters.

## Notes

- Two-step normalize, then compare.
  1. `s.replace(/[^a-zA-Z0-9]/g, "")` strips everything that isn't a
     letter or digit. The `g` flag is required — without it, only the
     first match is removed.
  2. `.toLowerCase()` normalizes case.
- The original draft forgot the `.toLowerCase()`. The regex already
  handled commas, spaces, and colons fine — the failure was case
  sensitivity. `"AmanaplanacanalPanama"` reversed is
  `"amanaPlacanalpanamA"`, which fails `===` because `A !== a`.
- Reversing with `split("").reverse().join("")` is safe here because the
  string is pure ASCII after the regex. Surrogate pairs (emoji, some CJK)
  would break — each half would split separately — but those can't reach
  this code.
- O(n) time, O(n) extra space. A two-pointer version avoids the reversed
  copy by walking from both ends and skipping non-alphanumerics. O(1)
  space, but more code — not worth it unless asked.

## Example

```js
isPalindrome('A man, a plan, a canal: Panama'); // true
isPalindrome('race a car'); // false
isPalindrome(' '); // true
```
