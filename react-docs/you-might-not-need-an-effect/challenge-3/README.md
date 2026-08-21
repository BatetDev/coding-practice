# Challenge: Reset state with a key

[Link to challenge](https://react.dev/learn/you-might-not-need-an-effect#challenges)

## Notes

- Removed `useEffect` that was resetting the form when `savedContact` changed.
- Used a `key` prop on a wrapper component to force React to recreate the form when `savedContact.id` changes.
- When the `key` changes, React destroys the old component instance and creates a new one with fresh state.
- No Effect needed—state resets automatically.

## How it works

- `EditContact` wrapper passes `key={savedContact.id}` to `EditForm`.
- `EditForm` initializes `name` and `email` state from `savedContact`.
- When a different contact is selected, `savedContact.id` changes, so the `key` changes.
- React recreates `EditForm` with the new contact's data, resetting the form.
