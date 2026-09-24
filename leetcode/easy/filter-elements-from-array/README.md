# Filter Elements from Array (LeetCode 2634)

[Problem link](https://leetcode.com/problems/filter-elements-from-array)

## Problem

Given an integer array `arr` and a filtering function `fn`, return a new array containing only the elements for which `fn(arr[i], i)` evaluates to a truthy value.

## Notes

- Avoided the built-in `Array.prototype.filter()` per the problem's explicit constraints.
- Used a standard `for` loop for optimal performance and direct index access, avoiding unnecessary callback overhead.
- Relied on implicit truthy/falsy coercion in the `if` statement rather than wrapping the result in `Boolean()`, keeping the code idiomatic and clean.

## Example

```js
const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  return n > 10;
};

filter(arr, fn); // [20, 30]
```
