# Sleep (LeetCode 2621)

[Problem link](https://leetcode.com/problems/sleep)

## Problem

Given a positive integer `millis`, write an asynchronous function `sleep(millis)` that returns a promise which resolves after approximately `millis` milliseconds.

The function can resolve with any value.

## Approach

Wrap `setTimeout` inside a `Promise`, then `await` that promise in an `async` function.

## Notes

- `setTimeout` schedules a callback after a delay, but it returns a timer ID, not a promise.
- To make it awaitable, we wrap it in `new Promise`.
- `async function` automatically returns a promise, so we do not need to manually return one.
- The promise can resolve with `undefined`, because the problem says it can resolve any value.
- Small timing deviations are acceptable because JavaScript timers depend on the event loop.
