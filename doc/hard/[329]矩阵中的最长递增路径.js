//给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。
//
// 对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。
//
//
//
// 示例 1：
//
//
//输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
//输出：4
//解释：最长递增路径为 [1, 2, 6, 9]。
//
// 示例 2：
//
//
//输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
//输出：4
//解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
//
//
// 示例 3：
//
//
//输入：matrix = [[1]]
//输出：1
//
//
//
//
// 提示：
//
//
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// 0 <= matrix[i][j] <= 2³¹ - 1
//
// Related Topics 深度优先搜索 广度优先搜索 图 拓扑排序 记忆化搜索 动态规划 👍 541 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const dx = [1, 0, 0, -1]
  const dy = [0, 1, -1, 0]
  const dfs = (matrix,i,j,m,n,memo)=>{
    if(memo[i][j])return memo[i][j]
    let max =1
    for (let k=0;k<4;k++){
      let x = i+dx[k]
      let y = j+dy[k]
      if(x>=0 && x<m && y>=0 && y<n && matrix[x][y]>matrix[i][j]){
        max = Math.max(max,1+dfs(matrix,x,y,m,n,memo))
      }
    }
    return memo[i][j] = max
  }
  if(matrix.length===0)return 0
  let m = matrix.length
  let n = matrix[0].length
  let memo = new Array(m).fill(0).map(_=>new Array(n))
  let res = 1
  for (let i = 0;i<m;i++){
    for (let j =0;j<n;j++){
      res = Math.max(res,dfs(matrix,i,j,m,n,memo))
    }
  }
  return res
}
//leetcode submit region end(Prohibit modification and deletion)
