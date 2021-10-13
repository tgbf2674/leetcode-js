//实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x⁴
//
// Related Topics 递归 数学 👍 750 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n<0)return 1/(x*myPow(x,-(n+1)))
  if(n === 0)return 1
  if(n === 1)return x
  return n%2===1 ? x* myPow(x,n-1) : myPow(x*x,n/2)
};
//leetcode submit region end(Prohibit modification and deletion)
