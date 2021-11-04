//给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,2,1]
//输出：true
//
//
// 示例 2：
//
//
//输入：head = [1,2]
//输出：false
//
//
//
//
// 提示：
//
//
// 链表中节点数目在范围[1, 10⁵] 内
// 0 <= Node.val <= 9
//
//
//
//
// 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
// Related Topics 栈 递归 链表 双指针 👍 1165 👎 0


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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 转成数组 (时间:O(n),空间:O(n))
  // let arr = []
  // let cur = head
  // while (cur){
  //   arr.push(cur.val)
  //   cur = cur.next
  // }
  // let l = 0,r = arr.length-1
  // while (r>=l){
  //   if(arr[l] !== arr[r])return false
  //   l++
  //   r--
  // }
  // return true

//  快慢指针(时间O(N),空间O(1))
  if(head === null || head.next === null)return true
  let fast = head,slow = head
  let prev = null
  while (fast&& fast.next){
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null
  let head2 = null
  while (slow){
    const tmp = slow.next
    slow.next = head2
    head2 = slow
    slow = tmp
  }
  while (head&& head2){
    if(head.val !== head2.val){
      return false
    }
    head = head.next
    head2 = head2.next
  }
  return true
};
//leetcode submit region end(Prohibit modification and deletion)
