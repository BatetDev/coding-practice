# Challenge 2: Switch synchronization on and off

[Link to challenge](https://react.dev/learn/lifecycle-of-reactive-effects#challenges)

## Notes

- Added `canMove` as a dependency to the `useEffect` array.
- Wrapped `setPosition` in an `if (canMove)` check inside the `handleMove` function.
- The effect now re‑runs when `canMove` changes, keeping the event listener in sync with the checkbox state.
