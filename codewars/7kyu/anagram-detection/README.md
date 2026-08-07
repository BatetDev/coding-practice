# Anagram Detection (7 kyu)

[Kata link](https://www.codewars.com/kata/529eef7a9194e0cbc1000255)

## Notes

- Normalized both strings by converting to **lowercase** before sorting.
- Used `split('')` to turn strings into arrays, `sort()` to order letters, and `join('')` to compare.
- **Caveat:** `toLowerCase()` must be applied **before** `sort()`, because `sort()` treats uppercase and lowercase letters differently (uppercase come first in Unicode order).

## How it works

1.  Convert both strings to lowercase.
2.  Split into arrays of characters.
3.  Sort the arrays alphabetically.
4.  Join the arrays back into strings.
5.  Compare the two normalized strings.
