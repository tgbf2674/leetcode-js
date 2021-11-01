//给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
//
// 进阶：
//
//
// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
//
//
//
//
// 示例 1：
//
//
//输入：head = [4,2,1,3]
//输出：[1,2,3,4]
//
//
// 示例 2：
//
//
//输入：head = [-1,5,3,4,0]
//输出：[-1,0,3,4,5]
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
// 链表中节点的数目在范围 [0, 5 * 10⁴] 内
// -10⁵ <= Node.val <= 10⁵
//
// Related Topics 链表 双指针 分治 排序 归并排序 👍 1346 👎 0


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
var sortList = function(head) {
  // 二分，merge排序(时间复杂度：O（nlogn）,空间复杂度:O(logn))
  if(!head || !head.next)return head
  let slow = head,fast = head,temp = null
  while (fast && fast.next){
    temp = slow
    slow = slow.next
    fast = fast.next.next
  }
  temp.next = null
  const l = sortList(head)
  const r = sortList(slow)
  return merge(l,r)
}
function merge(l1,l2){
  let dummy = new ListNode(0)
  let prev = dummy
  while (l1 && l2){
    if(l1.val>l2.val){
      prev.next = l2
      l2 = l2.next
    }else {
      prev.next = l1
      l1 = l1.next
    }
    prev= prev.next
  }
  if(l1)prev.next = l1
  if(l2)prev.next = l2
  return dummy.next
}
//leetcode submit region end(Prohibit modification and deletion)
