# Add Two Promises (LeetCode 2723)

[Problem link](https://leetcode.com/problems/add-two-promises)

## Problem

Given two promises resolving with numbers, return a promise resolving with
their sum.

## Notes

- `async` functions auto-wrap their return value in a Promise, so returning a plain number is enough — no `Promise.resolve` needed.
- `await promise` unwraps to the resolved value. Both must be awaited before
  adding; `promise1 + promise2` on the promise objects would be nonsense.
- No `await` on the final line: `num1` and `num2` are already plain numbers,
  and `await 7` just gives back `7`.
- Sequential awaits are fine here because the promises are already running
  when they're passed in. `Promise.all` would matter if the work started
  inside the function.

## Example

```js
addTwoPromises(Promise.resolve(2), Promise.resolve(5)).then(console.log); // 7
```
