# Find the Stray Number (7 kyu)

[Kata link](https://www.codewars.com/kata/57f609022f4d534f05000024)

## Notes

- Used `find()` with `indexOf` / `lastIndexOf` comparison to locate the unique number
- The condition `indexOf(num) === lastIndexOf(num)` works because duplicates appear more than once

## How it works

- `find()` loops through each number
- `indexOf(num)` and `lastIndexOf(num)` are compared
- If they're equal, the number appears only once → that's the stray
- `find()` returns the first (and only) number that passes the test
