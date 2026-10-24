# Valid Anagram (LeetCode 242)

[Problem link](https://leetcode.com/problems/valid-anagram)

## Problem

Return true if `t` is an anagram of `s` — same characters, same counts,
any order.

## Notes

- Early length check: different lengths can't be anagrams, so bail before
  doing any work.
- Sort both strings and compare. If they're anagrams, sorting puts the
  characters in the same order, so `===` gives the answer. Same
  normalize-and-compare pattern as `isPalindrome`.
- The sort version is O(n log n). A frequency-map version (increment for
  `s`, decrement for `t`) is O(n) — same lookup-table pattern as `twoSum`.
  Kept the sort version because it's shorter and fast enough here.

## Example

```js
isAnagram('anagram', 'nagaram'); // true
isAnagram('rat', 'car'); // false
isAnagram('aab', 'abb'); // false
```
