# Memoize (LeetCode 2623)

[Problem link](https://leetcode.com/problems/memoize)

## Problem

Return a memoized version of `fn`: calls with arguments that have been
seen before return the cached result instead of re-invoking `fn`.

## Notes

- Cache is a `Map` stored in the outer closure, so it persists across
  calls to the returned function.
- Arguments are serialized into a key with `args.join(",")`. A separator
  is required — `join("")` would collide (`[1, 22]` and `[12, 2]` both
  become `"122"`).
- Argument order is preserved in the key, matching the problem's rule
  that `(a, b)` and `(b, a)` are distinct cache entries.
- Pattern is identical to `once` from problem 2666: outer function holds
  state, inner function reads/writes it. The only difference is that the
  state is a lookup table instead of a boolean.
- `fn(...args)` spreads the arguments so `fn` receives the original
  argument list, not the array.

## Example

```js
const memoSum = memoize((a, b) => a + b);
memoSum(2, 3); // 5 — computed
memoSum(2, 3); // 5 — cached
```
