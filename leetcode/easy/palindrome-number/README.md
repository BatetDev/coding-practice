# Palindrome Number (LeetCode 9)

[Problem link](https://leetcode.com/problems/palindrome-number)

## Problem

Return true if the integer `x` reads the same forward and backward.

## Notes

- Convert to string, reverse, compare. String equality already answers
  the question — the `Number()` conversion in the first draft was
  redundant.
- Negatives are handled implicitly: `"-121"` reversed is `"121-"`, which
  isn't equal to `"-121"`. No `x < 0` guard needed.
- Trailing zeros fall out too: `"10"` reversed is `"01"`, unequal.
- Follow-up on LeetCode: solve without converting to a string. That
  version reverses the number arithmetically (`% 10` / `Math.floor(x/10)`)
  and compares halves. Worth trying next.

## Example

```js
isPalindrome(121); // true
isPalindrome(-121); // false
isPalindrome(10); // false
```
