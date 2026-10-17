# Interval Cancellation (LeetCode 2725)

[Problem link](https://leetcode.com/problems/interval-cancellation)

## Problem

Call `fn(...args)` immediately, then every `t` ms. Return a function that
stops the repeating calls when invoked.

## Notes

- The immediate call is a plain synchronous call — no timer involved.
  The repeating calls use `setInterval`, which is separate.
- `setInterval` returns a handle (an id). Captured it in `intervalId` so
  the returned cancel function can pass it to `clearInterval`.
- `clearInterval`, not `clearTimeout` — they're different APIs for
  different timers. Used the one matching the timer that was started.
- Wrapped `fn` in an arrow: `setInterval(() => fn(...args), t)`.
  Passing `fn(...args)` directly would invoke `fn` once immediately and
  hand its return value to `setInterval`, which isn't a function.
- Same closure/factory pattern as `once`, `memoize`, and `createCounter`:
  outer function holds state (the interval handle), returned function
  reads it.

## Example

```js
const cancel = cancellable((x) => x * 2, [4], 35);
setTimeout(cancel, 190);
// logs 8 at 0ms, 35ms, 70ms, 105ms, 140ms, 175ms; stops before 210ms
```
