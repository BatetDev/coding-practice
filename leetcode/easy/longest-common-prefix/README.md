# Longest Common Prefix (LeetCode 14)

[Problem link](https://leetcode.com/problems/longest-common-prefix)

## Problem

Return the longest common prefix among an array of strings, or `""` if
there is none.

## Notes

- Horizontal scanning: start with `strs[0]` as the candidate, then shrink
  it per string until it's a prefix of that string. The candidate only
  ever shrinks, so what survives is the longest common prefix.
- Inner `while` (not `if`) — one mismatched string may need several
  characters dropped. `prefix.slice(0, -1)` drops one per pass.
- Bug caught in review: an earlier version used `slice(0, -i)`, which
  drops `i` characters at once. Works only when the needed shrink equals
  the loop index — `["abcde", "abcdef", "abcdx"]` returned `"abc"`
  instead of `"abcd"`. LeetCode's tests didn't hit it.
- `startsWith("")` is always `true`, so an emptied prefix exits the
  `while` naturally — no infinite loop on fully disjoint strings.

## Example

```js
longestCommonPrefix(['flower', 'flow', 'flight']); // "fl"
longestCommonPrefix(['dog', 'racecar', 'car']); // ""
```
