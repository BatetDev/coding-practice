# Counter (LeetCode 2620)

[Problem link](https://leetcode.com/problems/counter-ii/)

## Problem

Given an integer `init`, return a counter object with three methods:

- `increment()` — increases the current value by 1 and returns it
- `decrement()` — decreases the current value by 1 and returns it
- `reset()` — sets the current value back to `init` and returns it

## Notes

- `init` is captured by the returned methods via a closure. Each call to
  `createCounter` gets its own independent `count`, so multiple counters
  don't interfere with each other.
- Used pre-increment (`++count`) and pre-decrement (`--count`) so each
  method returns the **new** value after mutating, which is what the
  problem requires.
- `reset` is written as a block body (not an arrow one-liner) because it
  needs two statements: reassign `count`, then return it. The comma
  operator or an IIFE would work too, but a block is clearer.
- Kept the returned object as a plain object literal with shorthand
  method syntax — simple, no `this`, no `class` needed.

## Example

```js
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
```
