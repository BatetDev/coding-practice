# Plus One (LeetCode 66)

[Problem link](https://leetcode.com/problems/plus-one)

## Problem

Given a non-negative integer as an array of digits (most significant
first, no leading zeros), add one and return the resulting digits.

## Notes

- Simulates grade-school addition. Walk from the rightmost digit: if it's
  less than 9, increment and return — nothing left to carry. If it's 9,
  wrap to 0 and let the loop's `i--` carry to the next digit left.
- The carry is handled by **falling through** the loop, not by any
  explicit "carry" variable. No `return` in the 9-branch means the loop
  continues; that's the whole mechanism.
- If the loop finishes, every digit was 9 — the carry went past the
  front. `digits.unshift(1)` prepends the new leading `1`. This is the
  only case where the output is one element longer than the input.
- First draft had `unshift` inside the `else`, which prepended a `1` on
  the first 9 instead of after all of them. `unshift` belongs after the
  loop, because reaching the end of the loop means _all_ digits
  overflowed.
- `digits[i] < 9` instead of `digits[i] >= 0 && digits[i] <= 8` — same
  condition, less noise, reads as "not a 9."
- No `Number(digits.join(""))` conversion — LeetCode's inputs can exceed
  JS's safe integer range, so the digit-by-digit simulation is required.

## Example

```js
plusOne([1, 2, 3]); // [1, 2, 4]
plusOne([4, 3, 2, 1]); // [4, 3, 2, 2]
plusOne([9]); // [1, 0]       — grew by one
plusOne([9, 9, 9]); // [1, 0, 0, 0] — grew by one
```
