# Capitalize the Title (LeetCode 2129)

[Problem link](https://leetcode.com/problems/capitalize-the-title)

## Problem

Capitalize each word in `title`: words of 3+ letters get their first
letter uppercased and the rest lowercased; 1–2 letter words stay all
lowercase.

## Notes

- Normalize first: `title.toLowerCase()` at the start, then split,
  transform, and join. This means `word.slice(1)` is already lowercase,
  so the tail never needs another `.toLowerCase()`. Handles mixed case
  like `"hELLO"` → `"Hello"` for free.
- The threshold is `length > 2` (3 or more), matching the "1 or 2
  letters stay lowercase" rule.
- Used `word[0]` instead of `charAt(0)` — modern, shorter, no method call.
- Split on `" "` (not `/\s+/`) because the problem guarantees single
  spaces between words, no leading/trailing whitespace.
- Formatted the `.map` chain across lines so the pipeline
  (lowercase → split → transform → join) reads top to bottom.

## Example

```js
capitalizeTitle('capiTalIze tHe titLe'); // "Capitalize The Title"
capitalizeTitle('First leTTeR of EACH Word'); // "First Letter of Each Word"
```
