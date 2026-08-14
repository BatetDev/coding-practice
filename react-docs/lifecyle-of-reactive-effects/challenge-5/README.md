# Challenge 5: Populate a chain of select boxes

[Link to challenge](https://react.dev/learn/lifecycle-of-reactive-effects#challenges)

## Notes

- Added a second `useEffect` to fetch places based on the selected `planetId`.
- Used the `ignore` pattern to prevent race conditions and state updates on unmounted components.
- The places effect depends on `planetId` and re‑runs whenever the selected planet changes.
- The first effect fetches the planet list on mount (`[]`), and the second fetches places when `planetId` changes (`[planetId]`).
