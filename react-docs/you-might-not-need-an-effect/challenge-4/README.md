# Challenge: Submit a form without Effects

[Link to challenge](https://react.dev/learn/you-might-not-need-an-effect#challenges)

## Notes

- Removed the `useEffect` that was sending the message on mount and on every change.
- Moved `sendMessage(message)` into the `handleSubmit` event handler.
- The message is now sent only when the user submits the form.
- This fixes the bug where an empty message was sent on page load when `showForm` was set to `false`.

## How it works

1. User types a message in the textarea.
2. User clicks "Send" → `handleSubmit` runs.
3. `sendMessage(message)` is called with the current message.
4. `setShowForm(false)` → thank-you dialog is shown.
5. "Open chat" resets `message` and sets `showForm(true)` to show the form again.
