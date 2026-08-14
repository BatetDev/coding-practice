# Challenge 4: Fix a connection switch

[Link to challenge](https://react.dev/learn/lifecycle-of-reactive-effects#challenges)

## Notes

- The original code was missing `createConnection` in the dependency array.
- Added `createConnection` as a dependency so the effect re-runs when encryption is toggled in App.js.
- Removed the `eslint-disable` suppression.
- Now toggling encryption correctly reconnects the chat with the updated connection type.
