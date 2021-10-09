//给你一个链表数组，每个链表都已经按升序排列。
//
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
//
//
//
// 示例 1：
//
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
//输出：[1,1,2,3,4,4,5,6]
//解释：链表数组如下：
//[
//  1->4->5,
//  1->3->4,
//  2->6
//]
//将它们合并到一个有序链表中得到。
//1->1->2->3->4->4->5->6
//
//
// 示例 2：
//
// 输入：lists = []
//输出：[]
//
//
// 示例 3：
//
// 输入：lists = [[]]
//输出：[]
//
//
//
//
// 提示：
//
//
// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] 按 升序 排列
// lists[i].length 的总和不超过 10^4
//
// Related Topics 链表 分治 堆（优先队列） 归并排序 👍 1540 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let len = lists.length
  if(!len)return null
  const mergeTwoList = (l1,l2)=>{
    if(!l1)return l2
    if(!l2)return l1
    if(l1.val>l2.val){
      l2.next = mergeTwoList(l1,l2.next)
      return l2
    }else{
      l1.next = mergeTwoList(l1.next,l2)
      return l1
    }
  }
  const merge = (l,r)=>{
    if(l === r)return lists[l]
    let mid = Math.floor((l+r)/2)
    let l1 = merge(l,mid)
    let l2 = merge(mid+1,r)
    return mergeTwoList(l1,l2)
  }
  return merge(0,len-1)
};
//leetcode submit region end(Prohibit modification and deletion)
