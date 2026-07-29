# Find Nearest Square Number (8 kyu)

[Kata link](https://www.codewars.com/kata/5a805d8cafa10f8b930005b)

## Notes

- Used square root (`Math.sqrt()`) to find the two closest integer candidates.
- Rounded down with `Math.floor()` and up with `Math.ceil()` to get the lower and upper bounds.
- Compared the differences between `n` and each candidate's square to find the nearest.
