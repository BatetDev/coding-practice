# 2. Add Two Numbers

[Problem link](https://leetcode.com/problems/add-two-numbers/)

## Problem

Given two non-empty linked lists representing non-negative integers, with
digits stored in reverse order (one digit per node), add the two numbers and
return the sum as a linked list in the same format.

## Notes

- The digits are in reverse order, so the head is the ones digit. Walking
  from head to tail is already adding from right to left, like by hand.
  No need to reach the end first or reverse anything.
- Don't convert the lists to real numbers. Long lists would overflow, and
  digit-by-digit addition avoids that. O(max(m, n)) time.
- Use a **dummy head** node and a `current` pointer, so the first node
  doesn't need special handling. Return `head.next` at the end.
- The loop runs while `l1 !== null || l2 !== null || carry > 0`. The
  `carry > 0` part matters for cases like `[9, 9] + [1]`, where a final
  node is needed after both lists run out.
- Each iteration: `sum = digit1 + digit2 + carry`, where a missing digit
  counts as `0` (`l1?.val ?? 0`). Then `sum % 10` is the digit to write down
  and `Math.floor(sum / 10)` is the carry for the next iteration.
- Advance with `l1 = l1?.next ?? null` so a list that ran out early doesn't
  throw.

## Example

```ts
addTwoNumbers([2, 4, 3], [5, 6, 4]); // [7, 0, 8]  (342 + 465 = 807)
addTwoNumbers([9, 9], [1]); // [0, 0, 1]  (99 + 1 = 100)
```

(Lists shown as arrays for readability. The real inputs and outputs are `ListNode` chains.)
