//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
//
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5]
//输出：[5,4,3,2,1]
//
//
// 示例 2：
//
//
//输入：head = [1,2]
//输出：[2,1]
//
//
// 示例 3：
//
//
//输入：head = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
//
//
//
//
// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
//
//
// Related Topics 递归 链表 👍 2059 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 迭代法（时间O(N),空间O(1)）
  let prev = null,cur = head
  while (cur){
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev

//  递归法(时间O(N),空间O(N))
//   if(!head || !head.next)return head
//   const newHead = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return newHead

//  尾递归法(时间O(N)，空间O(1))
//   const reverse=(prev,cur)=>{
//     if(!cur)return prev
//     let temp = cur.next
//     cur.next = prev
//     return reverse(cur,temp)
//   }
//   return reverse(null,head)
};
//leetcode submit region end(Prohibit modification and deletion)
