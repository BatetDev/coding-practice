# Roman to Integer (LeetCode 13)

[Problem link](https://leetcode.com/problems/roman-to-integer)

## Problem

Convert a Roman numeral string to an integer. Seven symbols map to values;
when a smaller symbol appears before a larger one (`IV`, `IX`, `XL`, `XC`,
`CD`, `CM`), its value is subtracted instead of added.

## Notes

- Instead of hardcoding the six subtraction pairs, used the general rule:
  if `current < next`, subtract `current`; otherwise add it. One rule
  covers all six cases and the default "add" case.
- Looked up values in a plain object (`values[s[i]]`) — fine here because
  keys are single-letter strings and the table is fixed. A `Map` would
  work too; picked an object because it reads like a lookup table.
- `values[s[i + 1]] ?? 0` handles the last symbol: `s[i + 1]` is
  `undefined` past the end, so `next` becomes `0`, the comparison
  `current < 0` is always false, and the last symbol is added. No special
  case for the boundary.
- `let total = 0` — reassigned every iteration, and starts at the additive
  identity so `total += x` works from the first iteration.
- Wrote add/subtract as `if`/`else`, not a ternary. A ternary should
  _return_ one of two values; using it for side effects reads as an
  unused expression and many linters flag it.

## Complexity

O(n) time (one pass over `s`), O(1) space (fixed table).

## Example

```js
romanToInt('III'); // 3
romanToInt('LVIII'); // 58
romanToInt('MCMXCIV'); // 1994
```
