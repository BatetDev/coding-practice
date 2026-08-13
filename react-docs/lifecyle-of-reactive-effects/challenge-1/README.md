# Challenge: Fix reconnecting on every keystroke

[Link to challenge](https://react.dev/learn/lifecycle-of-reactive-effects#challenges)

## Notes

- The effect was re-synchronizing on every keystroke because `message` state changes triggered re‑renders.
- Added `[roomId]` as a dependency array to the `useEffect` hook.
- The effect now only re‑runs when `roomId` changes (when the user selects a different chat room).
- `serverUrl` is a constant outside the component, so it doesn't need to be in the dependency array.
