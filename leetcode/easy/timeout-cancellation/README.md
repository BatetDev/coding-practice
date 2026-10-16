# Timeout Cancellation (LeetCode 2715)

[Problem link](https://leetcode.com/problems/timeout-cancellation)

## Problem

Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

If `cancelFn` is invoked before the delay of `t` milliseconds, it should cancel the delayed execution of `fn`. Otherwise, `fn` should be executed with the provided `args` after the delay.

## Approach

Schedule the execution of `fn(...args)` using `setTimeout` and store the returned timer ID. Return an inner function that calls `clearTimeout` with that stored ID to cancel the pending execution if needed.

## Notes

- `setTimeout` returns a unique timer ID, which is the required reference to cancel the scheduled task later.
- We must wrap the execution in an arrow function `() => fn(...args)` inside `setTimeout`. Passing `fn(...args)` directly would invoke the function immediately instead of delaying it.
- `clearTimeout(timerId)` safely does nothing if the timer has already expired and the callback has already run, so we don't need to check if it's still pending.
- This solution relies heavily on **closures**: the returned cancel function retains access to the `timerId` variable from its outer lexical scope even after the outer function has finished executing.
