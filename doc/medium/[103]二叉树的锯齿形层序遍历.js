//给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//
// 例如：
//给定二叉树 [3,9,20,null,null,15,7],
//
//
//    3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回锯齿形层序遍历如下：
//
//
//[
//  [3],
//  [20,9],
//  [15,7]
//]
//
// Related Topics 树 广度优先搜索 二叉树 👍 534 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = []
  if(!root)return res
  let curLevel = [root]
  while (curLevel.length){
    let curLevelVal = []
    let nextLevel = []
    for (let node of curLevel){
      curLevelVal.push(node.val)
      node.left&& nextLevel.push(node.left)
      node.right && nextLevel.push(node.right)
    }
    res.push(curLevelVal)
    res.length %2 === 0 && curLevelVal.reverse()
    curLevel = nextLevel
  }
  return res
}
//leetcode submit region end(Prohibit modification and deletion)
