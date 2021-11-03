//统计所有小于非负整数 n 的质数的数量。
//
//
//
// 示例 1：
//
// 输入：n = 10
//输出：4
//解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
//
//
// 示例 2：
//
// 输入：n = 0
//输出：0
//
//
// 示例 3：
//
// 输入：n = 1
//输出：0
//
//
//
//
// 提示：
//
//
// 0 <= n <= 5 * 10⁶
//
// Related Topics 数组 数学 枚举 数论 👍 772 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const isPrimes = new Array(n).fill(1)
  let res = 0
  for (let i =2 ;i<n;i++){
    if(isPrimes[i]){
      res++
      for (let j = i*i;j<n;j+=i){
        isPrimes[j] = 0
      }
    }
  }
  return res
};

//leetcode submit region end(Prohibit modification and deletion)
