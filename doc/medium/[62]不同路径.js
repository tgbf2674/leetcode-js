//一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
//
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
//
// 问总共有多少条不同的路径？
//
//
//
// 示例 1：
//
//
//输入：m = 3, n = 7
//输出：28
//
// 示例 2：
//
//
//输入：m = 3, n = 2
//输出：3
//解释：
//从左上角开始，总共有 3 条路径可以到达右下角。
//1. 向右 -> 向下 -> 向下
//2. 向下 -> 向下 -> 向右
//3. 向下 -> 向右 -> 向下
//
//
// 示例 3：
//
//
//输入：m = 7, n = 3
//输出：28
//
//
// 示例 4：
//
//
//输入：m = 3, n = 3
//输出：6
//
//
//
// 提示：
//
//
// 1 <= m, n <= 100
// 题目数据保证答案小于等于 2 * 10⁹
//
// Related Topics 数学 动态规划 组合数学 👍 1141 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 方案一：
  // let dp = new Array(m)
  // for (let i = 0 ;i<n;i++){
  //   dp[i] = new Array(m)
  //   dp[i][0] = 1
  // }
  // for (let i = 0;i<m;i++){
  //   dp[0][i] = 1
  // }
  // for (let i = 1;i<n;i++){
  //   for (let j = 1;j<m;j++){
  //     dp[i][j]= dp[i-1][j]+ dp[i][j-1]
  //   }
  // }
  // return dp[n-1][m-1]

  // 方案2：
  // let prev = new Array(n).fill(1)
  // let cur = new Array(n).fill(1)
  // for (let i = 1;i<m;i++){
  //   for (let j =1;j<n;j++){
  //     cur[j] = cur[j-1]+ prev[j]
  //   }
  //   prev = cur.slice(0)
  // }
  // return cur[n-1]

  // 方案3：
  let cur = new Array(n).fill(1)
  for (let i =1;i<m;i++){
    for (let j = 1;j<n;j++){
      cur[j] = cur[j-1]+ cur[j]
    }
  }
  return cur[n-1]
};
//leetcode submit region end(Prohibit modification and deletion)

