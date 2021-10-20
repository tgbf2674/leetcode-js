//给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
//
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
//
//
//
// 示例 1：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"ABCCED"
//输出：true
//
//
// 示例 2：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"SEE"
//输出：true
//
//
// 示例 3：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"ABCB"
//输出：false
//
//
//
//
// 提示：
//
//
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board 和 word 仅由大小写英文字母组成
//
//
//
//
// 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
// Related Topics 数组 回溯 矩阵 👍 1068 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const used = new Array(m).fill(false).map(_=>new Array(n))
  const canFind = (row,col,i)=>{
    if(i === word.length)return true
    if(row<0|| row>=m || col <0 || row>= n)return false
    if(used[row][col] || board[row][col] !== word[i])return false
    used[row][col] = true
    const canFindRest = canFind(row+1,col,i+1) || canFind(row-1,col,i+1) || canFind(row,col+1,i+1) || canFind(row,col-1,i+1)
    if(canFindRest)return true
    used[row][col] = false
    return false
  }
  for (let i = 0;i<m;i++){
    for (let j = 0;j<n;j++){
      if(board[i][j] === word[0] && canFind(i,j,0)){
        return true
      }
    }
  }
  return false
}
//leetcode submit region end(Prohibit modification and deletion)



