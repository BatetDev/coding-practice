# Valid Parentheses (LeetCode 20)

[Problem link](https://leetcode.com/problems/valid-parentheses)

## Problem

Given a string of only `( ) { } [ ]`, return true if every opener is
closed by the matching type in the correct order.

## Notes

- Stack is the natural data structure: brackets nest, so the most
  recently opened bracket is the first that must close (LIFO). Push
  openers, pop on closers.
- `pairs` maps close → open. The **closing** bracket is what triggers the
  check, so it's the one looked up. Membership in `pairs` doubles as the
  opener/closer test: `char in pairs` is true only for closers.
- Compare the popped opener against `pairs[char]` — the opener this
  closer _expects_ — not against `char` itself. `'(' !== ')'`, so the
  naive comparison always fails.
- Three exits: empty stack on a closer, mismatched pair, or leftover
  openers at the end. No `return true` inside the loop — one matched
  pair doesn't mean the whole string is valid.
- Used `for...of`, not `forEach`. `forEach` can't `break` or `return` out
  of the outer function — `return` inside a `forEach` callback just ends
  that one invocation. Needs a real loop to exit early.
- `s.length % 2 !== 0` early-out: odd-length can't have balanced pairs.
- Counting opens and closes doesn't work — `"([)]"` has matching counts
  but the wrong order. That's why the stack is necessary.

## Example

```js
isValid('()[]{}'); // true
isValid('([])'); // true
isValid('([)]'); // false — correct counts, wrong order
isValid('('); // false — opener never closed
```
