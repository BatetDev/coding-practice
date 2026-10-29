# FizzBuzz (LeetCode 412)

[Problem link](https://leetcode.com/problems/fizz-buzz)

## Problem

Return the FizzBuzz sequence from 1 to `n` as an array of strings:
multiples of 3 → `"Fizz"`, of 5 → `"Buzz"`, of both → `"FizzBuzz"`,
everything else → the number as a string.

## Notes

- Loop is `for (let i = 1; i <= n; i++)` — starts at 1 because the output
  is 1-indexed, and uses `<= n` because the output has exactly `n`
  elements. Earlier drafts had `i = 0` (wrong start) and `i < n` (one
  element short).
- Check FizzBuzz (`% 3 && % 5`) **first**. If `% 3` came first, `15`
  would match it and never reach `"FizzBuzz"`. Most specific condition
  wins.
- `i % 15 === 0` is equivalent to `i % 3 === 0 && i % 5 === 0`. Kept the
  explicit form so the reasoning is visible.

## Example

```js
fizzBuzz(5); // ["1", "2", "Fizz", "4", "Buzz"]
```
