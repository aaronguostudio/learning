// 通过引入 dummy head 简化代码

public class Solution2 {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyHead = new ListNode(-1);
        dummyHead.next = head;

        ListNode prev = dummyHead;

        while(prev.next != null) {
            if (prev.next.val == val)
                prev.next = prev.next.next;
            else {
                prev = prev.next;
            }
        }
        return dummyHead.next;
    }

    public static void main (String[] args) {
        int nums[] = { 1, 2, 6, 3, 4, 5, 6 };
        ListNode head = new ListNode(nums);
        System.out.println(head);

        (new Solution2()).removeElements(head, 6);
        System.out.println(head);
    }
}
