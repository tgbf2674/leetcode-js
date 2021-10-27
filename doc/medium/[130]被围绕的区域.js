//给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充
//。
//
//
//
//
// 示例 1：
//
//
//输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O",
//"X","X"]]
//输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
//解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都
//会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
//
//
// 示例 2：
//
//
//输入：board = [["X"]]
//输出：[["X"]]
//
//
//
//
// 提示：
//
//
// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] 为 'X' 或 'O'
//
//
//
// Related Topics 深度优先搜索 广度优先搜索 并查集 数组 矩阵 👍 643 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
//  dfs
//   const m = board.length
//   if(m === 0)return
//   const n = board[0].length
//   const dfs = (i,j)=>{
//     if(i < 0||i === m||j<0||j === n)return
//       if(board[i][j] === 'O'){
//         board[i][j] = 'NO'
//         dfs(i+1,j)
//         dfs(i-1,j)
//         dfs(i,j+1)
//         dfs(i,j-1)
//       }
//   }
//   for (let i =0;i<m;i++){
//     for (let j =0;j<n;j++){
//       if(i === 0 || i === m-1 || j === 0 || j===n-1){
//         if(board[i][j] === 'O')dfs(i,j)
//       }
//     }
//   }
//   for (let i = 0;i<m;i++){
//     for (let j =0;j<n;j++){
//       if(board[i][j]=== 'NO'){
//         board[i][j] = 'O'
//       }else if(board[i][j] === 'O')board[i][j] = 'X'
//     }
//   }
  const m = board.length
  if (m === 0) return
  const n = board[0].length
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const bfs = (i, j) => {
    let queue = [[i, j]]
    board[i][j] = 'NO'
    while (queue.length) {
      let [curI, curJ] = queue.shift()
      for (let [dx, dy] of dirs) {
        const x = curI + dx
        const y = curJ + dy
        if (x < 0 || x === m || y < 0 || y === n) continue
        if (board[x][y] === 'O') {
          board[x][y] = 'NO'
          queue.push([x, y])
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (board[i][j] === 'O') bfs(i, j)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
     if(board[i][j] === 'NO')board[i][j] = 'O'
     else if(board[i][j] === 'O')board[i][j] = 'X'
    }
  }
}
//leetcode submit region end(Prohibit modification and deletion)


