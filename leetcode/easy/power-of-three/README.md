# Power of Three (LeetCode 326)

[Problem link](https://leetcode.com/problems/power-of-three)

## Problem

Return true if `n` is a power of three — i.e. `n = 3^x` for some integer
`x ≥ 0`. Note `1 = 3^0`, so `1` counts.

## Notes

- Repeatedly divide by 3 while `n % 3 === 0`. If `n` was a power of
  three, this exhausts every factor of 3 and leaves exactly `1`. Anything
  left over means it wasn't.
- Guard `n <= 0` first — zero and negatives can't be powers of 3.
- The check `return n === 1` lives **after** the loop, not inside it.
  An earlier draft had `if (n === 1) return true` inside the loop, which
  returned `undefined` when the loop never ran (`n = 1`) or exited early
  (`n = 6`). Moving the check out makes every path return a boolean.
- `n /= 3` is shorthand for `n = n / 3`.

## Example

```js
isPowerOfThree(27); // true   (3^3)
isPowerOfThree(1); // true   (3^0)
isPowerOfThree(6); // false  (6 / 3 = 2, not 1)
isPowerOfThree(0); // false
isPowerOfThree(-3); // false
```
