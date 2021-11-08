//序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方
//式重构得到原数据。
//
// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串
//反序列化为原始的树结构。
//
// 提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的
//方法解决这个问题。
//
//
//
// 示例 1：
//
//
//输入：root = [1,2,3,null,null,4,5]
//输出：[1,2,3,null,null,4,5]
//
//
// 示例 2：
//
//
//输入：root = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：root = [1]
//输出：[1]
//
//
// 示例 4：
//
//
//输入：root = [1,2]
//输出：[1,2]
//
//
//
//
// 提示：
//
//
// 树中结点数在范围 [0, 10⁴] 内
// -1000 <= Node.val <= 1000
//
// Related Topics 树 深度优先搜索 广度优先搜索 设计 字符串 二叉树 👍 675 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // dfs(递归)
  // if(!root)return 'X'
  // const left = serialize(root.left)
  // const right = serialize(root.right)
  // return root.val + ','+left+','+right

//  bfs
  const queue = [root]
  const res = []
  while (queue.length){
    const node = queue.shift()
    if(node){
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }else {
      res.push('X')
    }
  }
  return res.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // dfs
  // const list = data.split(',')
  // const buildTree = (list)=>{
  //   const rootVal = list.shift()
  //   if(rootVal=== 'X')return null
  //   let root = new TreeNode(rootVal)
  //   root.left = buildTree(list)
  //   root.right = buildTree(list)
  //   return root
  // }
  // return buildTree(list)

//  bfs
  if(data==='X')return null
  const list = data.split(',')
  const root = new TreeNode(list[0])
  const queue = [root]
  let cursor = 1
  while (list.length>cursor){
    let node = queue.shift()
    const leftVal = list[cursor]
    const rightVal = list[cursor+1]
    if(leftVal!== 'X'){
      const leftNode = new TreeNode(leftVal)
      node.left = leftNode
      queue.push(leftNode)
    }
    if(rightVal!=='X'){
      const rightNode = new TreeNode(rightVal)
      node.right = rightNode
      queue.push(rightNode)
    }
    cursor+=2
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
//leetcode submit region end(Prohibit modification and deletion)
