/**
 * Adds two numbers stored as reversed digit linked lists.
 * Time: O(max(m, n)), Space: O(max(m, n)) for the result list.
 */
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  const BASE = 10;
  const head = new ListNode(0);
  let current = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / BASE);
    current.next = new ListNode(sum % BASE);
    current = current.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return head.next;
};
