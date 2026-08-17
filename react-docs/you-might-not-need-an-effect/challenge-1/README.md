# Challenge: Transform data without Effects

[Link to challenge](https://react.dev/learn/you-might-not-need-an-effect#challenges)

## Notes

- Removed unnecessary state variables: `activeTodos`, `visibleTodos`, and `footer`.
- Removed all three `useEffect` hooks.
- Calculated `activeTodos` and `visibleTodos` directly during rendering.
- Rendered the footer directly in the JSX.
- Kept only the essential state: `todos` and `showActive`.
