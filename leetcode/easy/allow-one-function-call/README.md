# Allow One Function Call (LeetCode 2666)

[Problem link](https://leetcode.com/problems/allow-one-function-call)

## Problem

Given a function `fn`, return a new function that calls `fn` at most once.
The first invocation returns `fn`'s result; every call after that returns
`undefined` (and `fn` is never invoked again).

## Notes

- Used a closure flag (`called`) to remember, across calls, whether `fn`
  has already run. The flag lives in the outer function's scope so it
  persists for the lifetime of the returned function.
- Forwarded arguments with a rest parameter and spread call:
  `(...args) => fn(...args)`. This preserves `fn`'s arity — `onceFn(1, 2, 3)`
  calls `fn(1, 2, 3)`, not `fn([1, 2, 3])`.
- Used a guard clause (`if (called) return undefined;`) so the
  "already called" path is explicit and the happy path stays unindented.

## Example

```js
const onceFn = once((a, b, c) => a + b + c);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined
```
