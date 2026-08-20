# Challenge: Cache a calculation without Effects

[Link to challenge](https://react.dev/learn/you-might-not-need-an-effect#challenges)

## Notes

- Used `useMemo` to cache the result of `getVisibleTodos()`.
- Dependencies: `[todos, showActive]` — only re‑runs when these change.
- Typing into the input no longer triggers the `getVisibleTodos` log.
- Removed the unnecessary Effect and state variable for `visibleTodos`.
