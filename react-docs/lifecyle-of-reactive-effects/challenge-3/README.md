# Challenge 3: Investigate a stale value bug

[Link to challenge](https://react.dev/learn/lifecycle-of-reactive-effects#challenges)

## Notes

- The original code had a stale closure bug: `handleMove` captured the initial `canMove` value and never updated.
- Removed the `eslint-disable` suppression and fixed the dependencies.
- Defined `handleMove` inside the `useEffect` and added `canMove` to the dependency array.
- This ensures the event listener always uses the latest `canMove` value.
